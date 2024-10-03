<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Organización de banquetes ',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar las prácticas clave relacionados con la organización y servicio en banquete. ',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la función principal del stewart en un banquete? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Limpiar las mesas. ', esCorrecta: false },
            {
              id: 'b',
              texto: 'Limpiar el menaje y manejar la máquina lavavajillas. ',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Servir las bebidas. ', esCorrecta: false },
            { id: 'd', texto: 'Trinchar los alimentos. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento es imprescindible en todos los <em>coffee breaks</em>? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Frutas y jugos. ', esCorrecta: false },
            { id: 'b', texto: 'Sándwiches y bizcochos. ', esCorrecta: false },
            { id: 'c', texto: 'Pastelería y refrescos. ', esCorrecta: false },
            { id: 'd', texto: 'Café y pan. ', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de menú se recomienda para una comida simple y económica? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Menú fijo emplatado. ', esCorrecta: false },
            { id: 'b', texto: 'Menú <em>buffet</em>.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Menú de bocadillo (picada).  ',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Menú temático. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'En los bares fijos, ¿cada cuántos metros se debe situar un cantinero (<em>barman</em>)? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Menú fijo emplatado. ', esCorrecta: false },
            {
              id: 'b',
              texto: 'Cada cuatro o cinco metros. ',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Cada diez metros. ', esCorrecta: false },
            { id: 'd', texto: 'Cada tres metros. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué debe hacer el personal que pasa bandejas con alimentos y bebidas? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Llenar los recipientes en exceso. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ofrecer la bebida directamente con la mano. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar brindar entremeses durante el evento. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ofrecer la bandeja para que el invitado tome el recipiente. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué debe hacer el personal al pasar la bebida por primera vez? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Distribuir servilletas de papel en la misma bandeja. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Llenar las bandejas con alimentos adicionales. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Brindar la bebida con las manos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Colocar las servilletas de papel sobre las mesas. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué se debe hacer cuando solo quedan pocos alimentos en una fuente durante un <em>buffet</em>?',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dejar la fuente hasta que se acabe. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ofrecer la fuente a los clientes restantes. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Retirar la fuente y completar con más alimentos. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Colocar otra fuente vacía en su lugar. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué se recomienda hacer para evitar molestias al pasar entre grupos de invitados? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ofrecer los alimentos rápidamente. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pasar por la parte más despejada del grupo. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Pasar por la parte posterior de los invitados. ',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Evitar ofrecer bebidas. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿En qué casos se coloca un colillero durante un <em>buffet</em> de gran tamaño? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para recoger cigarros y otros desperdicios del suelo. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para recoger los restos de comida de los platos. ',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Para servir bebidas. ', esCorrecta: false },
            {
              id: 'd',
              texto: 'Para organizar las botellas vacías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué alimentos se deben colocar primero en un <em>buffet-cena</em>? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Los alimentos calientes. ', esCorrecta: false },
            {
              id: 'b',
              texto: 'Los alimentos agrupados por variedades. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los alimentos más costosos. ',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Las bebidas alcohólicas. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
