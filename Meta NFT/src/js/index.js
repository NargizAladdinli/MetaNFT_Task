const retur = document.querySelector('#crt')

const collection = [
    {
        name:"Abstract painting",
        profil:"https://metanft.hasnaanajmi.org/images/avatars/1.jpg",
        like:142,
        img1:"https://metanft.hasnaanajmi.org/images/collections/1.jpg",
        img2:"https://metanft.hasnaanajmi.org/images/collections/2.jpg",
        img3:"https://metanft.hasnaanajmi.org/images/collections/3.jpg",
        img4:"https://metanft.hasnaanajmi.org/images/collections/4.jpg"
    },
    {
        name:"Modern Art",
        profil:"https://metanft.hasnaanajmi.org/images/avatars/1.jpg",
        like:142,
        img1:"https://metanft.hasnaanajmi.org/images/collections/1.jpg",
        img2:"https://metanft.hasnaanajmi.org/images/collections/2.jpg",
        img3:"https://metanft.hasnaanajmi.org/images/collections/3.jpg",
        img4:"https://metanft.hasnaanajmi.org/images/collections/4.jpg"
    },
    {
        name:"Abstract painting",
        profil:"https://metanft.hasnaanajmi.org/images/avatars/1.jpg",
        like:142,
        img1:"https://metanft.hasnaanajmi.org/images/collections/1.jpg",
        img2:"https://metanft.hasnaanajmi.org/images/collections/2.jpg",
        img3:"https://metanft.hasnaanajmi.org/images/collections/3.jpg",
        img4:"https://metanft.hasnaanajmi.org/images/collections/4.jpg"
    },
]

let text = "";
collection.forEach((item) => {
    text += `
    <div class="col-md-6 col-lg-4">
              <div class="boxing">
                <div class="container">
                  <div class="peple">
                    <a href="#">
                      <img src=${item.profil} alt="">
                    </a>
                    <a href="#">
                      <h4>${item.name}</h4>
                    </a>
                    <div class="heart">
                      <a href="#"><i class="fa-solid fa-heart"></i>${item.like}</a>
                    </div>
                  </div>
                  <div class="all" style="padding:10px 0px">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-6 g-2">
                        <a class="img" href="#">
                          <img src=${item.img1} alt="">
                        </a>
                      </div>
                      <div class="col-lg-6 col-md-6 col-6 g-2">
                        <a class="img" href="#">
                          <img src=${item.img2} alt="">
                        </a>
                      </div>
                      <div class="col-lg-6 col-md-6 col-6 g-2">
                        <a class="img" href="#">
                          <img src=${item.img3} alt="">
                        </a>
                      </div>
                      <div class="col-lg-6 col-md-6 col-6 g-2">
                        <a class="img" href="#">
                          <img src=${item.img4} alt="">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    `
})

retur.innerHTML = text;