const category = document.querySelector('#category');
const categorys = document.querySelector('#categorys');

const products = [
    {
        name:"3D Illustration",
        img:"https://metanft.hasnaanajmi.org/images/bid/2.jpg",
        profilio:"https://metanft.hasnaanajmi.org/images/avatars/2.jpg"
    },
    {
        name:"3D Illustration",
        img:"https://metanft.hasnaanajmi.org/images/bid/2.jpg",
        profilio:"https://metanft.hasnaanajmi.org/images/avatars/2.jpg"
    },
    {
        name:"3D Illustration",
        img:"https://metanft.hasnaanajmi.org/images/bid/2.jpg",
        profilio:"https://metanft.hasnaanajmi.org/images/avatars/2.jpg"
    },
    {
        name:"3D Illustration",
        img:"https://metanft.hasnaanajmi.org/images/bid/2.jpg",
        profilio:"https://metanft.hasnaanajmi.org/images/avatars/2.jpg"
    },
    {
        name:"3D Illustration",
        img:"https://metanft.hasnaanajmi.org/images/bid/2.jpg",
        profilio:"https://metanft.hasnaanajmi.org/images/avatars/2.jpg"
    },
    {
        name:"3D Illustration",
        img:"https://metanft.hasnaanajmi.org/images/bid/2.jpg",
        profilio:"https://metanft.hasnaanajmi.org/images/avatars/2.jpg"
    },
    {
        name:"3D Illustration",
        img:"https://metanft.hasnaanajmi.org/images/bid/2.jpg",
        profilio:"https://metanft.hasnaanajmi.org/images/avatars/2.jpg"
    },
    {
        name:"3D Illustration",
        img:"https://metanft.hasnaanajmi.org/images/bid/2.jpg",
        profilio:"https://metanft.hasnaanajmi.org/images/avatars/2.jpg"
    },
    {
        name:"3D Illustration",
        img:"https://metanft.hasnaanajmi.org/images/bid/2.jpg",
        profilio:"https://metanft.hasnaanajmi.org/images/avatars/2.jpg"
    },
    {
        name:"3D Illustration",
        img:"https://metanft.hasnaanajmi.org/images/bid/2.jpg",
        profilio:"https://metanft.hasnaanajmi.org/images/avatars/2.jpg"
    }
]

let text = "";
products.forEach((item) => {
    text += `
    <div class="col-lg-4 g-3">
                    <div class="boxing">
                      <div class="all">
                        <div class="img">
                          <a href="#">
                            <img src=${item.img} alt="">
                          </a>
                          <div class="heart">
                            <a href="#"><i class="fa-regular fa-heart"></i></a>
                          </div>
                          <a class="abid" href="#">${item.name}</a>
                        </div>
                        <div class="nft_box">
                          <div class="nft_titlewrap">
                              <h3>
                                  <a href="#">3D Illustration</a>
                              </h3>
                                <i class="fa-solid fa-fire"></i>
                          </div>
                          <div class="nft_wordlife">
                              <div class="nft_box_user">
                                  <div class="nft_img">
                                      <img src=${item.profilio} alt="">
                                      <div class="nft_name">
                                          <span>Creator</span>
                                          <h4>@Sinanart</h4>
                                      </div>
                                  </div>
                              </div>
                              <div class="nft_price">
                                  <span>Current Bid</span>
                                  <h4>4.07 ETH</h4>
                              </div>
                          </div>
                      </div>
                      </div>
                    </div>
                </div>
    `
})

category.innerHTML = text;
