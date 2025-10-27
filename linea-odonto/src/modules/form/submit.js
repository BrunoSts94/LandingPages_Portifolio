import dayjs from "dayjs"
import { scheduleNew } from '../../services/schedule-new.js'
import { schedulesDay } from '../schedules/load.js'

const clientName = document.getElementById('client')

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')

//Data atual para o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')
//carrega a data atual
selectedDate.value = inputToday

// definir a data minima como sendo a atual
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    //previne o comportamento padrão de carregar a página
    event.preventDefault()

    try {
        //Recuperando o nome do cliente
        const name = clientName.value.trim()

        if(!name){
            return alert('Informe o nome do cliente!')
        }

        //Recupera o horario selecionado
        const hourSelected = document.querySelector('.hour-selected')

        if(!hourSelected){
            return alert('Selecione a hora')
        }

        //Recupera somente a hora
        const [hour] = hourSelected.innerText.split(':')

        //Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, 'hour')

        //Gera um ID
        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when
        })

        await schedulesDay()
        clientName.value = ''
    } catch (error) {
        alert('Não foi possivel realizar o agendamento.')
        console.log(error)
    }
}