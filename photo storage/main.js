const input = document.querySelector('#file'),
    list = document.querySelector('.list')

//Уникальный id
const generateId = () => {
    const symbols =
        'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+?/.>,<'.split('')

    let res = ''
    for (let i = 0; i < 8; i++) {
        res += symbols[Math.floor(Math.random() * symbols.length)]
    }
    return res
}

//Создание блока с фоткой
const addPhoto = (flag, param, name) => {
    const photoItem = document.createElement('div')
    photoItem.classList.add('list_item')
    photoItem.innerHTML = `
        <span class="name">${localStorage.getItem(name)}</span><br>
        <div class="img_wrapper">
            <img src="${flag ? param : localStorage.getItem(param)}"/>
            <i class="fas fa-trash" onClick="addDeleteButton(this)"></i>
        </div>`
    photoItem.id = name
    list.append(photoItem)
}

//Удаление картинки
const addDeleteButton = (e) => {
    const mainDiv = e.parentNode.parentNode,
        span = mainDiv.querySelector('span')

    localStorage.removeItem(mainDiv.id)
    localStorage.removeItem(mainDiv.id.replace('name', ''))
    span.classList.add('active')
    setTimeout(() => location.reload(), 700)
}

input.addEventListener('change', (event) => {
    const files = event.target.files

    for (let currentPhoto of files) {
        //Проверка на расширение файла
        if (!currentPhoto.type.match('image.*')) {
            alert('Please load only photos')
            continue
        }

        const reader = new FileReader()
        reader.onload = (() => {
            return (e) => {
                const res = e.target.result
                const id = generateId(),
                    nameId = id + 'name'
                localStorage.setItem(id, res)
                localStorage.setItem(nameId, currentPhoto.name)
                addPhoto(true, res, nameId)
            }
        })()

        reader.readAsDataURL(currentPhoto)
    }
})

//Проверка на наличие фото в LocalStorage если есть, то подгрузить
if (localStorage) {
    const keys = Object.keys(localStorage)
    for (let i of keys) {
        if (!i.includes('name')) {
            addPhoto(false, i, i + 'name')
        }
    }
}