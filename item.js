// Data for each product
const products = {

    //Data for the Top sales
    shoes: {
        title: "PS England Shoes",
        price: "₹200",
        img: "https://i.postimg.cc/8CmBZH5N/shoes.webp",
        desc: "Stylish and comfortable shoes for all occasions, available in multiple colors.",
    },
    jacket: {
        title: "PS England Jacket",
        price: "₹150",
        img: "https://i.postimg.cc/76X9ZV8m/Screenshot_from_2022-06-03_18-45-12.png",
        desc: "Elegant and warm jacket for all weather conditions.",
    },
    shirt: {
        title: "PS England Shirt",
        price: "₹300",
        img: "https://i.postimg.cc/j2FhzSjf/bs2.png",
        desc: "Casual shirt with a classy look for all occasions.",
    },
    shoes2: {
        title: "PS England Shoes (Premium)",
        price: "₹300",
        img: "https://i.postimg.cc/QtjSDzPF/bs3.png",
        desc: "Premium quality shoes with enhanced comfort and durability.",
    },


    //Data for new Arrivals

    Tshirt: {
        title: "PS England T-Shirt",
        price: "₹200",
        img: "https://i.postimg.cc/fbnB2yfj/na1.png",
        desc: "Premium quality T-Shirt with enhanced comfort and durability.",
    },

    bag: {
        title: "PS England Bag",
        price: "₹230",
        img: "https://i.postimg.cc/zD02zJq8/na2.png",
        desc: "Premium quality bag with enhanced comfort and durability.",
    },

    sunglass: {
        title: "PS England Sunglass",
        price: "₹250",
        img: "https://i.postimg.cc/Dfj5VBcz/sunglasses1.jpg",
        desc: "Premium quality Sunglass with enhanced comfort and durability.",
    },

    shoes22: {
        title: "PS England Shoes (Premium)",
        price: "₹250",
        img: "https://i.postimg.cc/QtjSDzPF/bs3.png",
        desc: "Premium quality shoes with enhanced comfort and durability.",
    },


    //HOT SALE DATA
    shoes1: {
        title: "PS England Shoes",
        price: "₹260",
        img: "https://i.postimg.cc/8CmBZH5N/shoes.webp",
        desc: "Stylish and comfortable shoes for all occasions, available in multiple colors.",
    },
    Tshirt222: {
        title: "PS England T-Shirt",
        price: "₹100",
        img: "https://i.postimg.cc/fbnB2yfj/na1.png",
        desc: "Premium quality T-Shirt with enhanced comfort and durability.",
    },
    tshirt1: {
        title: "PS England T-Shirt",
        price: "₹100",
        img: "https://i.postimg.cc/RhVP7YQk/hs1.png",
        desc: "Premium quality T-Shirt with enhanced comfort and durability.",
    },
    bag1: {
        title: "PS England Bag",
        price: "₹230",
        img: "https://i.postimg.cc/zD02zJq8/na2.png",
        desc: "Premium quality bag with enhanced comfort and durability.",
    },


    //Stylish cloth data
    oldmoney: {
        title: "Old Money Dress",
        price: "₹1200",
        img: "https://i.postimg.cc/C1hGMc54/Whats-App-Image-2024-12-10-at-08-02-22-162b0ea3.jpg",
        desc: "Stylish and comfortable dress for all occasions, available in multiple colors.",
    },
    oldmoneyP: {
        title: "Old Money (premium)",
        price: "₹15000",
        img: "https://i.postimg.cc/tCZhgZq8/Whats-App-Image-2024-12-10-at-08-02-22-ab3de06c.jpg",
        desc: "Premium quality dress with enhanced comfort and durability.",
    },
    silk: {
        title: "Silk Dress",
        price: "₹7000",
        img: "https://i.postimg.cc/rwGRd5vZ/download.jpg",
        desc: "Stylish and comfortable dress for all occasions, available in multiple colors.",
    },
   suit: {
        title: "Embroided co-orde. set",
        price: "₹3300",
        img: "https://i.postimg.cc/59ZmLqRf/Whats-App-Image-2024-12-09-at-22-17-23-600a2ba1.jpg",
        desc: "Stylish and comfortable dress for all occasions, available in multiple colors.",
    },



     //Indian Wedding cloth data
     saree: {
        title: "Saree",
        price: "₹1200",
        img: "https://i.postimg.cc/s24hQ5ZD/feca9c763fe871369e9666f11c7d-1635348.jpg",
        desc: "Stylish and comfortable dress for all occasions, available in multiple colors.",
    },
    lehnga: {
        title: "Lehnga",
        price: "₹1500",
        img: "https://i.postimg.cc/2S4qMnGF/woman-7729639-640.jpg",
        desc: "Premium quality dress with enhanced comfort and durability.",
    },
    anaarkali: {
        title: "Anarkali Dress",
        price: "₹5000",
        img: "https://i.postimg.cc/SstjCdQq/2Y5A5532.webp",
        desc: "Stylish and comfortable dress for all occasions, available in multiple colors.",
    },
   sharara: {
        title: "Sharara",
        price: "₹3300",
        img: "https://i.postimg.cc/sxkX02ZN/libas-art-hot-pink-embroidered-georgette-a-line-kurta-with-sharara-and-dupatta-libas-1-1800x1800.jpg",
        desc: "Stylish and comfortable dress for all occasions, available in multiple colors.",
    },

};

// Populate item page dynamically
document.addEventListener("DOMContentLoaded", () => {
    // Get product key from URL query params
    const urlParams = new URLSearchParams(window.location.search);
    const productKey = urlParams.get("product");

    if (products[productKey]) {
        const product = products[productKey];

        // Populate fields
        document.getElementById("itemImg").src = product.img;
        document.getElementById("itemTitle").textContent = product.title;
        document.getElementById("itemPrice").textContent = product.price;
        document.getElementById("itemDesc").textContent = product.desc;
    } else {
        // Redirect to main page if no valid product key
        window.location.href = "index.html";
    }
});
