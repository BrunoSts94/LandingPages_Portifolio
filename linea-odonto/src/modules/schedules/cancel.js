import { schedulesDay } from './load.js'
import { scheduleCancel } from '../../services/schedule-cancel.js'
const period = document.querySelectorAll('.period')

//Gera evento de click para cada lista
period.forEach((period) => {
    period.addEventListener('click', async (event) => {
        if(event.target.classList.contains('cancel-icon')){
            const item = event.target.closest('li')

            //Obtem o id do agendamento para remover
            const { id } = item.dataset

            if (id) {
              const isComfirm = confirm(
                'Tem certeza que deseja cancelar o agendamento?'
              )
                if(isComfirm){
                await scheduleCancel({ id })
                schedulesDay()
                }  
            }
        }
    })
})