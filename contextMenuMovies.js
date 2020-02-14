//Scroll to the bottom to see the guide. Simply write cxItems and the menu will build itself.
//Create a function with for each ID you set on cxItems with the same name, they will execute on click.
contextMenuMovies.js application/javascript
const cssSelector = '{{1}}';
const Q = {
    MovieName: ()=>{ return self },
    checkStr: (val) => {return typeof val === 'string' && val.length > 0},
    inLineOnClick: (domID)=>{
        try { Q[domID](); }
          catch(err) { Q.err(err); }
          finally { Q.l('Success'); }
    },
    getMovieName(movieString){
          const baseName = movieString.trim().replace(/\.(avi|mkv|mpeg|mpg|mov|mp4|m4v)$/i, '');
          let movie = baseName.match(/(.*?)(directors(.?)cut|480p|720p|1080p|dvdrip|xvid|cd[0-9]|bluray|dvdscr|brrip|divx|S[0-9]{1,3}E[0-9]{1,3}|Season[\s,0-9]{1,4}|[\{\(\[]?[0-9]{4}).*/i);
          if (movie && movie[1]) {
            movie = movie[1].replace(/\./g, ' ').trim();
          } else {
            movie = baseName;
          }
          movie = movie.substring(movie.indexOf('-') + 1);
          return movie;
    },
    findDownloads: () => {
        const name = Q.MovieName.replace(' ', '+');
        const url = `http://example.net/?s=${name}&submit=Find`;
        window.open(url, '_blank');
    },
    youTubeSearch: () => {
        const name = Q.MovieName.replace(' ', '+');
        const url = `https://www.youtube.com/results?search_query=${name}+trailer`;
        window.open(url, '_blank');
    },
    copy2clip: () => {
        navigator.clipboard.writeText(Q.MovieName);
    },
    handler(e){
        let name;
        Q.checkStr(e.target.textContent) ? name=e.target.textContent : Q.err(e.target.textContent);
        Q.MovieName = Q.getMovieName(name);
    },
    err(logString){
        JSON.stringify(logString);
        return true;
    },
    l : (any) => { console.log(`${any}`)}
};
const __mCfg = {
    menu: void 0,
    menuState: false,
    startListening: ()=>{

        const titles = document.querySelectorAll(cssSelector);
        for (let title of titles) {
            title.addEventListener("contextmenu", e=>{
                e.preventDefault(),
                __mCfg.menuEvent(e),
                e.stopPropagation()
            }, !1)
        };
        document.addEventListener("click", __mCfg.clsM, false);
    },
    startMenu: ()=>{
        let b;
        if(window.hasOwnProperty("cxItems") && window.hasOwnProperty("cxClick")){
        	// create dom first
            b = document.createElement('cxmenu');
            b.style["z-index"] = 10e5;
            b.appendChild(document.createElement('ul'));
            cxItems.map(k => {
                    let item = document.createElement('li');
                    item.id = k.id;
                    let textnode = document.createTextNode(k.title);
                    item.appendChild(textnode);
                    item.setAttribute('onclick','cxClick(this.id)');
                b.firstChild.appendChild(item)
            });
            document.body.appendChild(b);
            // then apply css
            let h = document.head;
            let css = document.createElement('style');
            css.textContent = `cxmenu{position:absolute;color:#cdcdcd;border-radius:.6em;line-height:2em;display:none;top:0;left:0;width:fit-content;font-size:16px;box-shadow:0 2px 10px rgb(0,0,0);background:rgba(0,0,0,.79);backdrop-filter:saturate(180%) blur(3px)}cxmenu.open{display:block}cxmenu ul{padding:0;margin:.5em .2em}cxmenu ul li{cursor:pointer;overflow:hidden;padding:0 1em}cxmenu ul li:hover{background-image:linear-gradient(#6eaa5c,#265326);border-radius:.6em}`;
            h.appendChild(css);
            __mCfg.menu = document.getElementsByTagName('cxmenu').item(0);
        } else {
            console.warn("Please write a function handler for clicks or provide cxItems object like:")
            console.warn([{title: "Empty", id: "empty"}])
        }
    },
    menuEvent: (b)=>{
        if(!__mCfg.menu){ __mCfg.startMenu()}; 
        if(!__mCfg.menuState){ __mCfg.opnM(b);
        } else { __mCfg.clsM() };
    },
    opnM: (b)=> {
        __mCfg.menu.style.display = "block",
        __mCfg.menu.style.top = b.pageY + "px",
        __mCfg.menu.style.left = b.pageX + "px",
        Q.handler(b)
    },
    clsM: ()=> {
        __mCfg.menuState = false,
        __mCfg.menu.style.display = "none"
    }
};
//customize this as you wish.
//the dom is loaded like so ul > <li id="youTubeSearch" onClick="cxClick(this.id)"/>
//Easy peasy way: create a function with the same name as the ID, set it to global and change the below Q.inline... to window[e]. That's it.
//examples of functions can be found above, see youTubeSearch for ex.
window.cxClick = e => Q.inLineOnClick(e),
cxItems = [
    {title: "Search somewhere", id: "findDownloads"},
    {title: "YouTube Trailer", id: "youTubeSearch"},
    {title: "Copy Title", id: "copy2clip"}
],
onload = __mCfg.startListening;
