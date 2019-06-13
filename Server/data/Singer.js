class Singer{
    constructor(_id, name, link, avatar){
        this._id = _id;
        this.name = name;
        this.link = link;
        this.avatar = avatar;
    }
}

// const profileLink = "";
// const avatarLink = '';

let arraySinger = [
    { _id: 1, name: 'Karik', link: 'https://zingmp3.vn/nghe-si/Karik', avatar: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/b/b/2/f/bb2f46f98c401a0b6fab5235c873ac06.jpg'},
    { _id: 2, name: 'Hương Tràm', link: 'https://zingmp3.vn/nghe-si/Huong-Tram', avatar: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/b/f/b/9/bfb9522fe78758e81dfcb4b70d3f8f52.jpg'},
    { _id: 3, name: 'Trúc Nhân', link: 'https://zingmp3.vn/nghe-si/Truc-Nhan', avatar: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/6/06a413395d63b3af4647b3084ae8bba0_1509637818.jpg'}
]
module.exports = {

newSinger:(name,link,avatar) => {
    let lgth = arraySinger.length;
    let id = arraySinger[lgth-1]._id+1;
    const newSinger = new Singer(id,name,link,avatar);
    this.addSinger(newSinger);
    console.log('update array',arraySinger);
},
addSinger: (singer) => {
    arraySinger.push(singer);
},
getSinger:() => {
    return arraySinger;
}
}