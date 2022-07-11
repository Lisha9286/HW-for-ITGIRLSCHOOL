class Cat {
    constructor(options) {
        this.catName = options.catName;
        this.name = options.name;
        this.phone = options.phone;
        this.email = options.email;
        this.breed = options.breed;
        this.feed = options.feed;
        this.sex = options.sex;
    }
}


let btn = document.querySelector('.btn');
let breed = document.querySelector('#breed');
let feedArray = [];

btn.addEventListener('click', () => {

    document.querySelectorAll('.feed').forEach((item) => {
        if (item.checked) {
            feedArray.push(item.value)
        }
    })

    let cat = new Cat({
        catName: document.querySelector('#petname').value,
        name: document.querySelector('#fio').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        breed: document.querySelector('#breed').value,
        feed: feedArray,
        sex: document.querySelector("input[type='radio']:checked").value,
    })
    console.log(cat);
})

