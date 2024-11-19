const brevo = require('@getbrevo/brevo'); // https://developers.brevo.com/
const supabase = require('../services/supabase'); // Asegúrate de que la importación de supabase sea correcta si es necesario
require('dotenv/config');

let apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

let sendSmtpEmail = new brevo.SendSmtpEmail();

const sendEmailWithTemplate = async () => {
	try {
		// Consulta Supabase para obtener el correo electrónico del usuario
		const { data, error } = await supabase
			.from('Registrations') // Reemplaza con el nombre de tu tabla
			.select('Name, email')
			.order('created_at', { ascending: false })
			.limit(1);

		if (error || !data.length) {
			throw new Error('Failed to fetch the latest user: ' + (error?.message || 'No users found'));
		}

		const { email: userEmail, Name: userName } = data[0];

		const { data: cupones, error: cuponError } = await supabase
			.from('Cupones') // Reemplaza con el nombre de tu tabla
			.select('descuento, codigo')
			.order('id', { ascending: false })
			.limit(1);

		if (cuponError || !cupones.length) {
			throw new Error('Failed to fetch cupon: ' + (cuponError?.message || 'No cupon found'));
		}

		const { descuento: userCupon, codigo: userCodigo } = cupones[0];

		// Configurar el email con la dirección obtenida
		sendSmtpEmail.templateId = 1;
		sendSmtpEmail.sender = {
			name: 'Zoologico de Cali',
			email: 'garciallanosnatalia5@gmail.com',
		};
		sendSmtpEmail.to = [{ email: userEmail, name: userName }];
		sendSmtpEmail.replyTo = {
			email: 'dontreply@gmail.com',
			name: 'Support',
		};
		sendSmtpEmail.params = {
			name: userName,
			cupon: userCupon,
			codigo: userCodigo,
		};

		console.log('user email:', userEmail, 'user name:', userName, 'cupon:', userCupon, 'codigo:', userCodigo);

		const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
		console.log(JSON.stringify(response));
	} catch (error) {
		console.error('Error sending email:', error.message);
	}
};

module.exports = { sendEmailWithTemplate };
