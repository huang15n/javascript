const emojis = [8986,8987,9193,9194,9195,9196];
//저장되있는 이모지로 구현하는 루프함수와
// function convert (){
    
let init =0

// console.log(convert)
// document.getElementById('emoji').textContent = String.fromCodePoint(8986);
let item = [];
let emojiContainer =[]
for (const emoji of emojis){
   
    const emojiList = `${item.join(', ')}`
     item.push(`<p>&#${emoji};</p >`)
    document.getElementById('gallery').innerHTML = String.fromCodePoint(emoji);
    // document.getElementById('emoji').textContent = String.fromCodePoint(emoji);
    
}

const list = `${item.join(' ')}`
    const $gallery = document.getElementById('gallery')
    $gallery.innerHTML = $gallery.innerHTML +list