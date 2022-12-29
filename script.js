function gerar(){
    let num = document.getElementById('txtn')
    let print = document.getElementById('tab')

    let n = Number (num.value)

    if(num == 0){
        window.alert('Insira um número')
    }else{
        print.innerHTML = ''

        for(let i = 0; i <= 10; i++ ){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            print.appendChild(item)
        }

    }
}