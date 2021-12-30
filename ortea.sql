-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 26-07-2021 a las 13:55:46
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `ortea`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `vencimiento` varchar(20) NOT NULL,
  `cuerpo` text NOT NULL,
  `url` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=32 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `vencimiento`, `cuerpo`, `url`) VALUES
(16, 'Codo a codo 4.0 - GCBA', 'Capacitacion en full stack JAVA, PHP, Python y Javascript/Node', '16/07/2021', '<p>Preparamos a los estudiantes para la demanda de las empresas m&aacute;s innovadoras del &aacute;rea de programaci&oacute;n.</p>\r\n<p>Nuestros cursos est&aacute;n destinados a personas j&oacute;venes y adultas, que busquen desarrollarse profesional y personalmente, ampliando sus oportunidades laborales de acuerdo a los desaf&iacute;os que plantea el Siglo XXI. El objetivo es brindar herramientas que faciliten la inserci&oacute;n laboral en el sector Inform&aacute;tica (IT), y en particular, fomentar la participaci&oacute;n de las mujeres, con el fin de mejorar su empleabilidad. Para eso, desde la Agencia de Aprendizaje a lo largo de la vida establecemos un cupo del 50% de vacantes destinadas a ellas, lo que permite que todos los a&ntilde;os se incremente el n&uacute;mero de inscriptas y egresadas en habilidades tecnol&oacute;gicas, para insertarse y desarrollarse en el &aacute;rea de la programaci&oacute;n.</p>\r\n<p>&nbsp;</p>\r\n<h3>Contenidos del Programa</h3>\r\n<p>Ofrecemos 5 opciones de aprendizaje:</p>\r\n<ul>\r\n<li style="text-align: left;">Full Stack - Java</li>\r\n<li style="text-align: left;">Full Stack - PHP</li>\r\n<li style="text-align: left;">Full Stack - Python</li>\r\n<li style="text-align: left;">FullStack - Desarrollo Web (JavaScript/Node.JS)</li>\r\n<li style="text-align: left;">Testing &amp; QA</li>\r\n</ul>\r\n<p>Adem&aacute;s, trabajamos aspectos vinculados al &aacute;mbito laboral, para lograr una incorporaci&oacute;n exitosa en el mundo del trabajo.</p>\r\n<p><br />Los cursos son <strong>gratuitos</strong> y tienen una duraci&oacute;n de <strong>20 semanas.</strong></p>\r\n<h3 style="text-align: left;">Requisitos</h3>\r\n<ul style="text-align: left;">\r\n<li>Nivel inicial en programaci&oacute;n</li>\r\n<li>Nivel b&aacute;sico de ingl&eacute;s</li>\r\n<li>Mayor de 18 a&ntilde;os</li>\r\n<li>T&iacute;tulo secundario</li>\r\n</ul>\r\n<h3 style="text-align: left;">Modalidad Virtual</h3>\r\n<ul>\r\n<li style="text-align: left;">Se dictar&aacute;n 2 clases por semana con un docente en l&iacute;nea de una duraci&oacute;n de 90 minutos cada una.</li>\r\n<li style="text-align: left;">Las ejercitaciones, actividades y/o consultas se desarrollar&aacute;n dentro de la plataforma donde encontrar&aacute;s todo lo necesario para tu formaci&oacute;n: foros, material te&oacute;rico y acompa&ntilde;amiento docente y pedag&oacute;gico..</li>\r\n</ul>', 'https://www.buenosaires.gob.ar/educacion/codocodo/el-programa'),
(17, 'Naranja Tech ', '¡Llega la 3 edición de la Academia IT, by Naranja X! Esta vez, un entrenamiento intensivo sobre Mobile: Android. Junto a Bedu, como partner educativo.', '28/07/2021', '<p>Si sos Desarrollador/a y ten&eacute;s muchas ganas de seguir potenciando tus skills, conoc&eacute; la propuesta:</p>\r\n<p>✅ Clases 100% virtuales</p>\r\n<p>✅ Modalidadsincr&oacute;nica + asincr&oacute;nica</p>\r\n<p>✅ +100 horas de formaci&oacute;n.</p>\r\n<p>✅ 4 clases por semana, de 17 a 21 hs.</p>\r\n<p>✅ Comienza en agosto y dura 7,5 semanas.</p>\r\n<p>Vamos a ver: - Kotlin fundamentals - Kotlin intermedio (views, layouts, listas, fragments, gradle) - Kotlin avanzado (animaciones y transiciones, app components, firebase y notifications, patrones de arquitectura y testing) &iquest;Qu&eacute; se necesita para participar? ☑ Tener conocimientos b&aacute;sicos de desarrollo y programaci&oacute;n en Javascript, Java u otro lenguaje. ☑ Muchas ganas de aprender y desarrollarte junto a los profesionales con mucha experiencia. A partir de ese d&iacute;a, &iexcl;te van a llegar novedades! *Participan hasta 15 personas.</p>', 'https://tech.naranja.com/academia-it'),
(18, 'Fundación Formar', 'Formación en programación full stack en alianza con Digital House y Banco Santander.', '01/08/2021', '<p>La inserci&oacute;nlaboral no se gesta de igualmanera en losdistintosterritorios. En algunaszonas, como el conurbanobonaerense, el puenteque conduce a las personas al mundodeltrabajo formal est&aacute;partidoy no llegasiempre al destinodeseado. Con el objetivo de uniresos dos puntos, Fundaci&oacute;nFormarrealizasuaporte a la comunidadyofreceformaci&oacute;nt&eacute;cnicay en habilidadespara el trabajo Barrios donde se implementa: -Villa Jardín &ndash; Lanús-Puertaocho- 3 de Febrero-IAPI &ndash; Quilmes-Derqui &ndash; Pilar</p>\r\n<p>Aprovechando la Revolución Digital que estamos viviendo hoy en día, y dado que la programación va a ser una herramienta fundamental en los trabajos del futuro, desde junio 2019 comenzamos el proyecto de &ldquo;Programando la inclusión&rdquo;. Esta es una escuela de oficios digitales cuyo objetivo es inspirar a jóvenes mayores de 18 a 30 años en situación de vulnerabilidad social, para que ingresen al mercado laboral a través de la tecnología. Formar es responsable de la difusión, selección de participantes y dictado de cursos de programación de acuerdo a la demanda laboral que a tal efecto tengan las empresas.</p>', 'https://www.fundacionformar.net/'),
(19, 'Politic Misiones', 'Curso gratuito de Desarrollo web fullstack con JAVA.', '01/08/2021', '<p>Este curso tiene como objetivo brindar a los estudiantes, las herramientas necesarias a la hora de desempe&ntilde;arse dentro de una empresa, proyecto ya existente, o de forma independiente mediante la implementaci&oacute;n de un emprendimiento digital, logrando alcanzar el perfil de Desarrollador web Java fullstack junior.</p>\r\n<ul class="tox-checklist">\r\n<li class="tox-checklist--checked" style="text-align: left;">Duraci&oacute;n: 40 encuentros.</li>\r\n<li class="tox-checklist--checked" style="text-align: left;">INICIA: martes 3 de agosto a las 8 hs.</li>\r\n<li class="tox-checklist--checked" style="text-align: left;">Modalidad: VIRTUAL</li>\r\n<li class="tox-checklist--checked" style="text-align: left;">Dedicaci&oacute;n: 7 hs. semanales</li>\r\n</ul>', 'https://polotic.misiones.gob.ar/curso-gratuito-de-desarrollo-web-fullstack-con-java/'),
(20, 'Incluyeme', 'Capacitación de UTN.BA en Desarrollo Full Stack para personas con discapacidad con el objetivo de potenciar sus habilidades y su empleabilidad. ', '10/08/2021', '<p style="text-align: center;"><strong>&iexcl;Postulate a una beca al 100% para certificarte como Full Stack Developer! </strong></p>\r\n<p>Con apoyo de la Agencia Suiza para el Desarrollo y la Cooperaci&oacute;n, Bid Lab y USAID, iniciamos la convocatoria a la segunda edici&oacute;n de cursos en habilidad digitales para personas con discapacidad con el objetivo de potenciar sus habilidades y su empleabilidad.</p>\r\n<p>Esta capacitaci&oacute;n en Desarrollo Full Stack se orienta a personas que tengan conocimientos del c&oacute;digo HTML, CSS, conocimientos b&aacute;sicos del idioma ingl&eacute;s y computadora con acceso a internet.</p>\r\n<p style="text-align: center;"><strong>&iquest;Qu&eacute; tienes que saber? </strong></p>\r\n<p>- Precio: beca al 100%</p>\r\n<p>- Modalidad virtual con clases en vivo 2 veces a la semanay material asincr&oacute;nicocomplementario</p>\r\n<p>- Duraci&oacute;n: 16 semanas La certificaci&oacute;n ser&aacute; otorgada por la UTN.BA Facultad Regional Buenos Aires (FRBA).</p>\r\n<p>S&oacute;lo debes postularte a la beca a trav&eacute;s de esta vacante y te estaremos contactando a trav&eacute;s de tu correo electr&oacute;nico para contarte los siguientes pasos en tu aplicaci&oacute;n.</p>', 'https://www.incluyeme.com/desarrolla-tu-futuro-2021/?__hstc=244274394.9b3d5e236b5ca42072e976579a566989.1626965487062.1626965487062.1626965487062.1&__hssc=244274394.7.1626965487062&__hsfp=1431177457'),
(25, 'Telecom digit@lers', 'Programa de formación gratuita en programación y oficios digitales, que conecta a l@s jóvenes con su vocación digital.', '15/08/2021', '<h3>Cursos</h3>\r\n<p>digit@lers est&aacute; destinado a j&oacute;venes mayores de 18 a&ntilde;os con ganas de aprender sobre programaci&oacute;n y oficios digitales. Ofrece herramientas para ayudarl@s a pensar "fuera de la caja", o de manera poco convencional, y que puedan dise&ntilde;ar e implementar soluciones creativas y originales. &iexcl;Y que se diviertan mientras lo hacen!<br /><br />Hoy la industria TIC (Tecnolog&iacute;as de la Informaci&oacute;n y la Comunicaci&oacute;n) busca perfiles con habilidades digitales y en Telecom queremos que puedan desarrollar su talento digital.<br /><br />En la selecci&oacute;n de los candidatos priorizaremos a aquellos j&oacute;venes con mayor necesidad de formarse (ya sea porque est&aacute;n sin trabajo o porque tienen m&aacute;s dificultad en acceder a cursos de capacitaci&oacute;n) y se buscar&aacute; un balance entre solicitudes presentadas por varones y mujeres y la mayor representatividad geogr&aacute;fica posible entre las provincias del pa&iacute;s.</p>\r\n<h3>&iquest;C&oacute;mo se cursa?</h3>\r\n<p>El curso tiene una duraci&oacute;n de 6 meses y la experiencia se divide en:<br /><br /><strong>Clases online en vivo:</strong></p>\r\n<ul style="list-style-type: none;">\r\n<li>2 clases semanales de 3 horas cada una, seg&uacute;n d&iacute;as y horarios del curso elegido (contenido sincr&oacute;nico de 130 horas)</li>\r\n<li>Jornadas de Habilidades Blandas y encuentros con expertos/as en tecnolog&iacute;a (contenido sincr&oacute;nico de 12 horas)</li>\r\n</ul>\r\n<p><br /><br /><strong>Teor&iacute;a y pr&aacute;ctica adicional:</strong></p>\r\n<ul style="list-style-type: none;">\r\n<li>Para potenciar tu aprendizaje, te recomendamos dedicar, adicionalmente a las clases, 6 horas por semana como m&iacute;nimo (contenido asincr&oacute;nico de 130 horas).</li>\r\n</ul>\r\n<p>Los cursos tienen una capacidad m&aacute;xima de hasta 50 estudiantes, para asegurar un mejor funcionamiento del grupo y garantizar un acompa&ntilde;amiento personalizado.<br /><br />Para completar la cursada es necesario cumplir con el 75% de asistencia y haber completado todos de los trabajos pr&aacute;cticos solicitados.<br /><br />L@s estudiantes que completen el curso y cumplan todas las consignas obtendr&aacute;n un certificado expedido por Telecom Argentina y Educaci&oacute;n IT, nuestro socio pedag&oacute;gico.<br /><br />La curr&iacute;cula de cada curso busca ofrecer herramientas &uacute;tiles para quienes quieran dar sus primeros pasos en la industria de la tecnolog&iacute;a. Por este motivo, contar&aacute;n con un docente expert@ y vinculad@ activamente con el mercado.</p>', 'http://digitalers.com.ar/'),
(31, 'Profeee Borre esta novedad!!', 'Novedad de muestra - borrar por favor', 'ya!', '<p>sauhdasdsusdhdasdsdas</p>\r\n<p>dsajkdhsajkdasadslsdl</p>\r\n<p>dkasdklasdasjasdsadasd</p>\r\n<p>asdasodashdhaskdasasd</p>', 'http://www.google.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'jacky', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
