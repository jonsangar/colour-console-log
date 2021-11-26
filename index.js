module.exports = {
	success,
	error,
	info,
	warning,
	custom
};

/**
 * Muestra un mensaje por consola con color de fondo #55b700 (verde) - Success!
 *
 * @param {string} msg 
 */
function success(msg) {
	const styles = 'background-color: #55b700; color: white; padding: 2px 8px; border-radius: 5px';
	showLog(msg, styles);
};
/**
 * Muestra un mensaje por consola con color de fondo #55b700 (rojo) - Error!
 *
 * @param {string} msg 
 */
function error(msg) {
	const styles = 'background-color: #ff3300; color: white; padding: 2px 8px; border-radius: 5px';
	showLog(msg, styles);
};
/**
 * Muestra un mensaje por consola con color de fondo #80bfff (azul) - Info!
 *
 * @param {string} msg 
 */
function info(msg) {
	const styles = 'background-color: #80bfff; color: white; padding: 2px 8px; border-radius: 5px';
	showLog(msg, styles);
};
/**
 * Muestra un mensaje por consola con color de fondo #ff9d00 (naranja) - Warning!
 *
 * @param {string} msg 
 */
function warning(msg) {
	const styles = 'background-color: #ff9d00; color: white; padding: 2px 8px; border-radius: 5px';
	showLog(msg, styles);
};
/**
 * Muestra un mensaje por consola con color de fondo personalizado
 * @example
 * custom('Hola mundo', '#333333');
 *
 * @param {string} msg 
 * @param {string} color - Valor de color de la propiedad CSS background-color;
 */
function custom(msg, color) {
	const styles = `background-color: ${color}; color: white; padding: 2px 8px; border-radius: 5px`;
	showLog(msg, styles);
}

function showLog(message, styles) {
	console.log('%c%s', styles, message);
}