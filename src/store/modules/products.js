const state = {
    products:[[{name:'A52s',price:Intl.NumberFormat().format(9899000),src:'https://cdn.movertix.com/media/catalog/product/cache/image/1200x/s/a/samsung-galaxy-a52s-5g-dual-sim-awesome-black-128gb-and-6gb-ram-sm-a528b-ds.jpg',count:0,x:[],item_total:0,condition:false},
    {name:'Samung a21s', price:Intl.NumberFormat().format(5400000),src:'https://m.media-amazon.com/images/I/71b-olHJgFS._AC_SX522_.jpg',count:0,x:[],item_total:0,condition:false}]

    ,[{name:'iphone 12 pro max', price:Intl.NumberFormat().format(38000000),src:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHKK3?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1603649004000',count:0,x:[],item_total:0,condition:false},
    {name:'iphone13 pro max',price:Intl.NumberFormat().format(40800000),src:'https://www.handy-deutschland.de/assets/img/produktbilder/apple/apple-iphone-13-pro-max/apple_iphone_13_pro_max_sierrablau_4.jpg?v1647009414',count:0,x:[],item_total:0,condition:false}]

    ,[{name:'Poco x3', price:Intl.NumberFormat().format(7245000),src:'https://cdn.movertix.com/media/catalog/product/cache/image/1200x/x/i/xiaomi-poco-x3-pro-dual-sim-frost-blue-128gb-and-6gb-ram-back_1.jpg',count:0,x:[],item_total:0,condition:false},
    {name:'Redmi note 10 pro', price:Intl.NumberFormat().format(8088000),src:'https://s.alicdn.com/@sc04/kf/Hd260a70808fe4a53a98461ba2e10bb54e.png_300x300.png',count:0,x:[],item_total:0,condition:false}]

    ,[{name:'Huawei y9s', price:Intl.NumberFormat().format(6300000),src:'https://store.micourvisions.com/wp-content/uploads/2020/07/Huawei-Y9s.jpg',count:0,x:[],item_total:0,condition:false},
    {name:'nova 9 NAM-LX9',price:Intl.NumberFormat().format(11379000),src:'https://images-na.ssl-images-amazon.com/images/I/21tAezRiHnL.jpg',count:0,x:[],item_total:0,condition:false}]
    ]
}

const getters = {
    all_products: (state) => state.products
}


const actions = {

}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}