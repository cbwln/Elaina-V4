/**
 * @name ElainaV2
 * @author Elaina Da Catto
 * @description Elaina theme 2nd Generation for Pengu Loader
 * @link https://github.com/Elaina69
 * @Nyan Meow~~~
 */
import utils from 'https://cdn.statically.io/gh/Elaina69/Elaina-V2/main/Main/_utilselaina.js'
//___________________________________________________________________________//
let watermark, thisVersion, newVersion,lang
let assetspath = new URL(".", import.meta.url).href + "assets"
let pluginpath = new URL(".", import.meta.url).href + "resources"
let configpath = new URL(".", import.meta.url).href + "configs"

try{let res = await fetch(`https://cdn.statically.io/gh/Elaina69/Elaina-V2/main/resources/Watermark.js`)
if (res.status==200) {watermark = (await (() => import(`https://cdn.statically.io/gh/Elaina69/Elaina-V2/main/resources/Watermark.js`))()).default}}catch{}
try{let res = await fetch(`https://cdn.statically.io/gh/Elaina69/Elaina-V2/main/configs/Language.js`)
if (res.status==200) {lang = (await (() => import(`https://cdn.statically.io/gh/Elaina69/Elaina-V2/main/configs/Language.js`))()).default}}catch{}
try{let res = await fetch('https://cdn.statically.io/gh/Elaina69/Elaina-V2/main/configs/Version.js')
if (res.status==200) {newVersion = (await (() => import('https://cdn.statically.io/gh/Elaina69/Elaina-V2/main/configs/Version.js'))()).default}}catch{}
try{let res = await fetch(`${configpath}/Version`)
if (res.status==200) {thisVersion = (await (() => import(`${configpath}/Version`))()).default}}catch{}
/*
try{let res = await fetch()
if (res.status==200) { = (await (() => import())()).default}}catch{}
*/

ImportPlugins(`${pluginpath}/ThemeSettings`)
ImportPlugins(`${pluginpath}/Auto-accept`)
ImportPlugins(`${pluginpath}/Dodge-button`)
ImportPlugins(`${pluginpath}/Offline-mode`)
ImportPlugins(`${pluginpath}/Hide_friendlist`)
ImportPlugins(`${pluginpath}/FakeIP`)
ImportPlugins(`${pluginpath}/Auto-Ban-Pick`)
ImportPlugins(`${pluginpath}/LootHelper`)
ImportPlugins(`${pluginpath}/RandomSkin`)
ImportPlugins(`${pluginpath}/Buy-all-champs`)
ImportPlugins(`${pluginpath}/Pandoru`)
ImportPlugins(`${pluginpath}/NameSpoofer`)
ImportPlugins(`${pluginpath}/profile-utils-master`)

const langCode = document.querySelector("html").lang
const langMap  = lang.langlist
//___________________________________________________________________________//



//___________________________________________________________________________//
//Theme DataStore
if (!DataStore.has("Receive-Update")) {
	DataStore.set("Receive-Update", true)
}
if (!DataStore.has("Continues_Audio")) {
	DataStore.set("Continues_Audio", true)
}
if (!DataStore.has("Sidebar-Transparent")) {
	DataStore.set("Sidebar-Transparent", false)
}
if (!DataStore.has("Hide-Champions-Splash-Art")) {
	DataStore.set("Hide-Champions-Splash-Art", true)
}
if (!DataStore.has("Custom-Font")) {
	DataStore.set("Custom-Font", false)
}
if (!DataStore.has("Custom_RP")) {
	DataStore.set("Custom_RP", true)
}
if (!DataStore.has("RP-data")) {
	DataStore.set("RP-data", "-69")
}
if (!DataStore.has("Custom_BE")) {
	DataStore.set("Custom_BE", true)
}
if (!DataStore.has("BE")) {
	DataStore.set("BE", "-69")
}
if (!DataStore.has("Custom-Rank-Name")) {
	DataStore.set("Custom-Rank-Name", true)
}
if (!DataStore.has("Rank-line1")) {
	DataStore.set("Rank-line1", "Apprentice")
}
if (!DataStore.has("Rank-line2")) {
	DataStore.set("Rank-line2", "Witch")
}
if (!DataStore.has("Animate-Loading")) {
	DataStore.set("Animate-Loading", false)
}
if (!DataStore.has("Custom-Avatar")) {
	DataStore.set("Custom-Avatar", true)
}
if (!DataStore.has("Custom-Icon")) {
	DataStore.set("Custom-Icon", true)
}
if (!DataStore.has("Custom-Cursor")) {
	DataStore.set("Custom-Cursor", false)
}
if (!DataStore.has("settings-dialogs-transparent")) {
	DataStore.set("settings-dialogs-transparent", false)
}
if (!DataStore.has("Hide-linking-settings")) {
	DataStore.set("Hide-linking-settings", true)
}
if (!DataStore.has("Hide-verify-acc")) {
	DataStore.set("Hide-verify-acc", true)
}
if (!DataStore.has("new-gamesearch-queue")) {
	DataStore.set("new-gamesearch-queue", true)
}


//Plugins DataStore
if (!DataStore.has("auto_accept")) {
	DataStore.set("auto_accept", false)
}
if (!DataStore.has("aram-only")) {
    DataStore.set("aram-only", false)
}
if (!DataStore.has("Old-League-Loader-Settings")) {
	DataStore.set("Old-League-Loader-Settings", true)
}
if (!DataStore.has("Auto-ban-pick")) {
	DataStore.set("Auto-ban-pick", true)
}
if (!DataStore.has("Auto-Find-Queue")) {
	DataStore.set("Auto-Find-Queue", false)
}
if (!DataStore.has("Create-Delay")) {
	DataStore.set("Create-Delay", 20000)
}
if (!DataStore.has("Find-Delay")) {
	DataStore.set("Find-Delay", 3000)
}
if (!DataStore.has("Gamemode")) {
	DataStore.set("Gamemode", 450)
}
if (!DataStore.has("Custom-Rank(Hover-card)")) {
	DataStore.set("Custom-Rank(Hover-card)", true)
}
if (!DataStore.has("Ranked Queue ID")) {
	DataStore.set("Ranked Queue ID", 0)
}
if (!DataStore.has("Ranked Tier ID")) {
	DataStore.set("Ranked Tier ID", 8)
}
if (!DataStore.has("Ranked Division ID")) {
	DataStore.set("Ranked Division ID", 0)
}
if (!DataStore.has("Custom-Status")) {
	DataStore.set("Custom-Status", true)
}
if (!DataStore.has("status-delay")) {
	DataStore.set("status-delay", 5000)
}
if (!DataStore.has("Merry-Christmas")) {
	DataStore.set("Merry-Christmas", true)
}
if (!DataStore.has("April fool` joke")) {
	DataStore.set("April fool` joke", false)
}
if (!DataStore.has("loot-helper")) {
	DataStore.set("loot-helper", true)
}
if (!DataStore.has("random-skin")) {
	DataStore.set("random-skin", false)
}
if (!DataStore.has("ChampsPrice")) {
	DataStore.set("ChampsPrice", 450)
}
if (!DataStore.has("buy-all-champs")) {
	DataStore.set("buy-all-champs", true)
}
if (!DataStore.has("Name-Spoofer")) {
	DataStore.set("Name-Spoofer", false)
}
if (!DataStore.has("Spoof-name")) {
	DataStore.set("Spoof-name", "Elaina Da Catto")
}
if (!DataStore.has("")) {
	DataStore.set("", true)
}
//___________________________________________________________________________//



//___________________________________________________________________________//
async function ImportPlugins(link) {
	try  {let res = await fetch(link);if (res.status == 200) {(await (() => import(link))()).default}}
	catch{console.log("File doesn't exist, can't load module/plugins")}
}
function create_element(tagName, className, content) {
	const el = document.createElement(tagName)
	el.className = className
	if (content) {
		el.innerHTML = content
	}
	return el
}
function go_to_default_home_page() {
	document.querySelector(`lol-uikit-navigation-item[item-id='elaina-home']`).click()
}
function add_elaina_home_page() {
	let lol_home = document.querySelector(".rcp-fe-lol-home > lol-uikit-section-controller")

	if (lol_home) {
		if (!lol_home.querySelector("[section-id='elaina-home']")) {
			let elaina_home = create_element("lol-uikit-section", "")
			let div         = create_element("div", "wrapper")

			div.id = "elaina-home"
			elaina_home.setAttribute("section-id", "elaina-home")
			elaina_home.append(div)
			lol_home.prepend(elaina_home)
		}
	}
}
function add_elaina_home_navbar() {
	let navbar = document.querySelector(".rcp-fe-lol-home > lol-uikit-navigation-bar")

	if (navbar) {
		if (!navbar.querySelector("[item-id='elaina-home']")) {
			let elaina_home_navbar_item = create_element("lol-uikit-navigation-item", "")

			elaina_home_navbar_item.setAttribute("item-id", "elaina-home")
			elaina_home_navbar_item.setAttribute("priority", 1)
			elaina_home_navbar_item.textContent = lang[langMap[langCode] || "EN"]["home"]

			navbar.prepend(elaina_home_navbar_item)
		}
	}
}
function patch_default_home_page(){
	let loop = 0
	let intervalId = window.setInterval(() => {
		loop++
		if (loop >= 21) {window.clearInterval(intervalId)}
		go_to_default_home_page()
	}, 100)
}
function newTicker() {
	let ticker = document.querySelector("#lol-uikit-layer-manager-wrapper > lol-uikit-full-page-backdrop > lol-uikit-flyout-frame")
	if (ticker) {
		ticker.shadowRoot.querySelector("div > div.border").style.display = "none"
		ticker.shadowRoot.querySelector("div > div.sub-border").style.display = "none"
		ticker.shadowRoot.querySelector("div > div.caret").style.display = "none"
		ticker.shadowRoot.querySelector("div > div.lol-uikit-flyout-frame").style.backgroundColor = "black"
		ticker.shadowRoot.querySelector("div > div.lol-uikit-flyout-frame").style.borderRadius = "10px"
	}
}
function newGameSearch() {
	if (DataStore.get("new-gamesearch-queue") && document.querySelector("lol-social-panel > lol-parties-game-info-panel")) {
		try {
			let gameinfo = document.querySelector("lol-social-panel > lol-parties-game-info-panel").shadowRoot.querySelector("div > div.parties-game-info-panel-content > lol-parties-status-card").shadowRoot
				gameinfo.querySelector("div").style.background = "#143c1400"
				gameinfo.querySelector("div > div.parties-status-card-bg-container").style.color = "#36d98700"
				gameinfo.querySelector("div > div.parties-status-card-bg-container > video").setAttribute('src', '')
				gameinfo.querySelector("div > div.parties-status-card-header").style.visibility = "hidden"

			let cardbody = gameinfo.querySelector("div > div.parties-status-card-body").style
				cardbody.marginTop = "-23px"
				cardbody.padding = "10px 5px 10px 10px"
				cardbody.border = "1px solid #8c8263"
				cardbody.borderRadius = "10px"

			let gamesearch = document.querySelector("lol-social-panel > lol-parties-game-info-panel").shadowRoot.querySelector("div > div.parties-game-info-panel-content > lol-parties-game-search").shadowRoot
				gamesearch.querySelector("div").style.border = "1px solid #8c8263"
				gamesearch.querySelector("div").style.borderRadius = "10px"
				gamesearch.querySelector("div").style.marginTop = "9px"
				gamesearch.querySelector("div > div.parties-game-search-divider").style.display = "none"

			document.querySelector("lol-social-panel > lol-parties-game-info-panel").shadowRoot.querySelector("div > div.parties-game-info-panel-bg-container").style.backgroundImage = "none"
			document.querySelector("lol-social-panel > lol-parties-game-info-panel").shadowRoot.querySelector("div > div.parties-game-info-panel-content > lol-parties-status-card").shadowRoot.
				querySelector("div > div.parties-status-card-body > div.parties-status-card-map.game_map_howling_abyss").style.margin = "-3px 10px 0 0"
		}catch{}
	}
}
function CustomRP() {
	let RP = document.querySelector("div.currency-rp")
	if (DataStore.get("Custom_RP") && RP) {
		RP.innerHTML = `${DataStore.get("RP-data")}`
	}
}
function CustomBE() {
	let BE = document.querySelector(".currency-be-component.ember-view")
	if (DataStore.get("Custom_BE") && BE) {
		BE.innerHTML = /* html */`
			<div class="currency-be-icon-container">
				<div class="currency-be-icon-static"></div>
				<lol-uikit-video type="intro" src="/fe/lol-navigation/add-blue-essence.webm" class="animation-add-blue-essence"></lol-uikit-video>
				<lol-uikit-video type="intro" src="/fe/lol-navigation/remove-blue-essence.webm" class="animation-remove-blue-essence"></lol-uikit-video>
			</div>
			${DataStore.get("BE")}
		`
	}
}
function CustomRank() {
	let queueOptions = ["RANKED_SOLO_5x5","RANKED_FLEX_SR","RANKED_FLEX_TT",
                        "RANKED_TFT","RANKED_TFT_TURBO","RANKED_TFT_DOUBLE_UP",
    ]
    let tierOptions = ["IRON","BRONZE","SILVER","GOLD","PLATINUM",
                       "DIAMOND","MASTER","GRANDMASTER","CHALLENGER"
    ]
    let divisionOptions = ["I", "II", "III", "IV"];
    let requestBody = {
        "lol": {
            "rankedLeagueQueue"    : queueOptions[DataStore.get("Ranked Queue ID")],
            "rankedLeagueTier"     : tierOptions[DataStore.get("Ranked Tier ID")],
            "rankedLeagueDivision" : divisionOptions[DataStore.get("Ranked Division ID")]
        }
    }
    window.setInterval(async()=>{
        await fetch("/lol-chat/v1/me", {
            method : "PUT",
            headers: {"content-type": "application/json"},
            body   : JSON.stringify(requestBody)
        })
    },10000)
}
//___________________________________________________________________________//



//___________________________________________________________________________//
function UpdatePopup() {
    const noticediv   = document.createElement("div")
    const messboxdiv  = document.createElement("div")
    const downloaddiv = document.createElement("div")
    const closediv    = document.createElement("div")
    const message     = document.createElement("p")
    const download    = document.createElement("a")
    const notice      = document.createElement("img")
    const close       = document.createElement("img")

    messboxdiv.classList.add("messdiv")
    downloaddiv.classList.add("downdiv")
    closediv.classList.add("closediv")
    close.classList.add("closenotice")
    message.classList.add("message")
    download.classList.add("download")
    noticediv.classList.add("noticediv")
    notice.classList.add("notice")

    notice.setAttribute('src', `${assetspath}/Icon/Plugins-icons/download.png`)
    close.setAttribute('src', `${assetspath}/Icon/Plugins-icons/close.png`)

    let showcontainer = document.getElementsByClassName("rcp-fe-lol-home")[0]

    showcontainer.appendChild(noticediv)
    noticediv.append(notice)

    noticediv.addEventListener('click', () => {
		const langCode = document.querySelector("html").lang
		const langMap  = lang.langlist
		const selectedLang = lang[langMap[langCode] || "EN"]

        showcontainer.appendChild(messboxdiv)
        showcontainer.appendChild(downloaddiv)
        showcontainer.appendChild(closediv)
        showcontainer.appendChild(message)
        closediv.append(close)
        downloaddiv.append(download)

        message.innerHTML = selectedLang["update_mess"]
        download.innerHTML = selectedLang["update"]
		download.setAttribute("href",'https://codeload.github.com/Elaina69/Elaina-V2/zip/refs/tags/v'+newVersion+'')
        download.setAttribute("target", '_blank')

        closediv.addEventListener('click', () => {
            try {
                document.getElementsByClassName("message")[0].remove()
                document.getElementsByClassName("download")[0].remove()
                document.getElementsByClassName("closenotice")[0].remove()
                document.getElementsByClassName("messdiv")[0].remove()
                document.getElementsByClassName("downdiv")[0].remove()
                document.getElementsByClassName("closediv")[0].remove()
            }
            catch {}
        })
    })
}
function DelPopup() {
    try {
        document.getElementsByClassName("notice")[0].remove()
        document.getElementsByClassName("noticediv")[0].remove()
        document.getElementsByClassName("message")[0].remove()
        document.getElementsByClassName("download")[0].remove()
        document.getElementsByClassName("closenotice")[0].remove()
        document.getElementsByClassName("messdiv")[0].remove()
        document.getElementsByClassName("downdiv")[0].remove()
        document.getElementsByClassName("closediv")[0].remove()
    }
    catch {}
}
async function createLoaderMenu(root) {
	const { Component, jsx, render } = await import('//esm.run/nano-jsx')
	const langCode = document.querySelector("html").lang;
	const langMap = lang.langlist
	const version = thisVersion
	const TRANSLATIONS = lang
	const _t = TRANSLATIONS[langMap[langCode] || "EN"];
	
	class LoaderMenu extends Component {
		visible = false
		frame = null
		opener = null
		didMount() {
			this.opener = document.querySelector('div[action=settings]')
			this.opener.addEventListener('click', e => {
				if (!this.visible) {
					e.stopImmediatePropagation()
					this.show(true)
				}
			})
		}
		show(on) {
			this.visible = on
			this.update()
			if (this.visible) {
				this.frame.shadowRoot.querySelector('lol-uikit-close-button')
					?.addEventListener('click', () => this.show(false))
			}
		}
		showDefaultSettings() {
			this.opener.click()
			this.show(false)
		}
		render() {
			return jsx/*html*/`
				<div class="modal" style="position: absolute; inset: 0px; z-index: 8500" hidden=${!this.visible || undefined}>
					<lol-uikit-full-page-backdrop class="backdrop" style="display: flex; align-items: center; justify-content: center; position: absolute; inset: 0px" />
					<div class="dialog-confirm" style="display: flex; align-items: center; justify-content: center; position: absolute; inset: 0px">
						<lol-uikit-dialog-frame ref=${el => (this.frame = el)} class="dialog-frame" orientation="bottom" close-button="false">
							<div class="dialog-content">
								<lol-uikit-content-block class="app-controls-exit-dialog" type="dialog-medium" style="position: relative; overflow: hidden">
									<div style="position: absolute; top: 60px">
										<video
											src="${assetspath}/Icon/Plugins-icons/LL-Settings.webm"
											style="object-fit: cover; object-position: center center; height: 100%; width: 100%; transform-origin: center center; transform: scale(2.5)">
										</video>
									</div>
									<div style="position: relative">
										<div style="margin-bottom: 24px">
											<h4 style="padding: 6px 0">Elaina-V2</h4>
											<p>v${version}</p>
										</div>
										<hr class="heading-spacer" />
										<div style="display: flex; flex-direction: column; align-items: center; gap: 12px">
											<lol-uikit-flat-button-secondary style="display:inline-block; width: 200px" onClick=${() => window.openDevTools()}>
												${_t['l.open_devtools']} (Ctrl-Shift-I)
											</lol-uikit-flat-button-secondary>
											<lol-uikit-flat-button-secondary style="display:inline-block; width: 200px" onClick=${() => window.location.reload()}>
												${_t['l.reload_client']} (Ctrl-Shift-R)
											</lol-uikit-flat-button-secondary>
											<lol-uikit-flat-button-secondary style="display:inline-block; width: 200px" onClick=${() => window.openPluginsFolder()}>
												${_t['l.open_plugins']}
											</lol-uikit-flat-button-secondary>
										</div>
										<hr class="heading-spacer" />
										<p style="padding: 20px 0" class="lol-settings-code-of-conduct-link lol-settings-window-size-text">
											<a href="https://github.com/Elaina69/Elaina-V2/releases" target="_blank">${_t['l.theme_releases']}</a>
										</p>
									</div>
								</lol-uikit-content-block>
							</div>
							<lol-uikit-flat-button-group type="dialog-frame">
								<lol-uikit-flat-button tabindex="1" class="button-accept" onClick=${() => this.showDefaultSettings()}>${_t['l.open_settings']}</lol-uikit-flat-button>
								<lol-uikit-flat-button tabindex="2" class="button-decline" onClick=${() => this.show(false)}>${_t['l.close']}</lol-uikit-flat-button>
							</lol-uikit-flat-button-group>
						</lol-uikit-dialog-frame>
					</div>
				</div>
			`
		}
	}
	render(jsx`<${LoaderMenu} />`, root)
}
//___________________________________________________________________________//



//___________________________________________________________________________//
let updateLobbyRegaliaBanner = async message => {
	let phase = JSON.parse(message["data"])[2]["data"]
	if (phase == "Lobby") {
		window.setInterval(() => {
			try {
				let base = document.querySelector("lol-regalia-parties-v2-element.regalia-loaded").shadowRoot.querySelector(".regalia-parties-v2-banner-backdrop.regalia-banner-loaded")
					base.shadowRoot.querySelector(".regalia-banner-asset-static-image").style.filter = "sepia(1) brightness(3.5) opacity(0.4)"
					base.shadowRoot.querySelector(".regalia-banner-state-machine").shadowRoot.querySelector(".regalia-banner-intro.regalia-banner-video").style.filter = "grayscale(1) saturate(0) brightness(0.5)"
			}
			catch {}
            if (DataStore.get("Custom-Avatar")) {
                try {
					document.querySelector("div.lobby-banner.local > lol-regalia-parties-v2-element").shadowRoot.querySelector("div > div > div.regalia-parties-v2-crest-wrapper > lol-regalia-crest-v2-element").
						shadowRoot.querySelector("div > uikit-state-machine > div.lol-regalia-summoner-icon-mask-container > div").style.backgroundImage = "var(--Avatar)"
				}
				catch {}
            }
		},200)
	}
}
let pageChangeMutation = async (node) => {
	let pagename, previous_page, ranked_observer
	let patcher_go_to_default_home_page = true

	pagename = node.getAttribute("data-screen-name")

	if (pagename == "rcp-fe-lol-home-main") {
		if (!document.getElementsByClassName("webm-bottom-buttons-container").length) {
			try{watermark.ElainaTrigger()}catch{}
		}
		add_elaina_home_page()
		add_elaina_home_navbar()
		go_to_default_home_page()
		if (previous_page == "rcp-fe-lol-parties" ){
			patch_default_home_page()
		}
		
		window.setTimeout(async () => {
			if (DataStore.get("Auto-Find-Queue") && !DataStore.get("aram-only")) {
				await fetch('/lol-lobby/v2/lobby', {
					method: 'POST',
					body: JSON.stringify({ queueId: DataStore.get("Gamemode") }),
					headers: {
					'Content-Type': 'application/json'
					}
				})
				window.setTimeout(async () => {
					await fetch('/lol-lobby/v2/lobby/matchmaking/search', {
						method: 'POST'
					})
				},DataStore.get("Find-Delay"))
			}
			else if (DataStore.get("Auto-Find-Queue") && DataStore.get("aram-only")) {
				await fetch('/lol-lobby/v2/lobby', {
					method: 'POST',
					body: JSON.stringify({ queueId: 450 }),
					headers: {
					'Content-Type': 'application/json'
					}
				})
				window.setTimeout(async () => {
					await fetch('/lol-lobby/v2/lobby/matchmaking/search', {
						method: 'POST'
					})
				},DataStore.get("Find-Delay"))
			}
		},DataStore.get("Create-Delay"))
		window.setInterval(() => {
			try {
				let homecontent = document.querySelector('.rcp-fe-lol-home > lol-uikit-section-controller > lol-uikit-section > #overview > iframe[referrerpolicy = "no-referrer-when-downgrade"]')
					homecontent.contentWindow.document.querySelector("body").style.background = "#00000073"
					homecontent.contentWindow.document.querySelector("#gatsby-focus-wrapper > div > div > div > div > div > div > div > img").src = "none"

			}
			catch {}
		},100)
	}
	else if (pagename != "rcp-fe-lol-navigation-screen" && pagename != "window-controls" && pagename != "rcp-fe-lol-home" && pagename != "social") {
		if (document.getElementsByClassName("webm-bottom-buttons-container").length) {
			DelPopup()
			try{watermark.DelElainaTrigger()}catch{}
		}
	}
	if (pagename == "social") {
		if (patcher_go_to_default_home_page){
			go_to_default_home_page()
			patcher_go_to_default_home_page = false
		}
	}
	if (pagename == "rcp-fe-lol-store") {
		window.setInterval(() => {
			try {
				let storeIframe = document.querySelector('#rcp-fe-lol-store-iframe > iframe[referrerpolicy = "no-referrer-when-downgrade"]')
					storeIframe.contentWindow.document.querySelector("#root > div > div.item-page.container.content.clearfix > div.item-page-items-container-wrapper.purchase-history-page-content-wrapper").style.background = "transparent"
		
				let th = storeIframe.contentWindow.document.querySelectorAll("#root > div > div.item-page.container.content.clearfix > div.item-page-items-container-wrapper.purchase-history-page-content-wrapper > div > div > table > thead > tr > th")
				for (let i = 0; i < th.length; i++) {
					th[i].style.background = "transparent"
				}
			}
			catch {}
		},100)
	}
	if (pagename == "rcp-fe-lol-profiles-main") {		
        let rankedNode = document.querySelector('[section-id="profile_subsection_leagues"]')
    
        window.setInterval(() => {
            try {
                document.querySelector("div > lol-regalia-profile-v2-element").shadowRoot.querySelector("div > lol-regalia-banner-v2-element").shadowRoot.querySelector("div > uikit-state-machine > div:nth-child(2) > img").remove()
                document.querySelector("div > div.summoner-xp-radial").remove()
            }
            catch {}
			if (DataStore.get("Custom-Rank-Name")) {
				try {
					document.querySelector(".style-profile-ranked-component.ember-view > .style-profile-emblem-wrapper  > .style-profile-emblem-header > .style-profile-emblem-header-title").innerHTML = DataStore.get("Rank-line1")
					document.querySelector(".style-profile-emblem-subheader-ranked > div").innerHTML = DataStore.get("Rank-line2")
				}
				catch{}
			}
            if (DataStore.get("Custom-Avatar")) {
                try {
					document.querySelector("div > lol-regalia-profile-v2-element").shadowRoot.querySelector("div > div > div.regalia-profile-crest-hover-area.picker-enabled > lol-regalia-crest-v2-element").shadowRoot.querySelector("div > uikit-state-machine > div.lol-regalia-summoner-icon-mask-container > div").style.backgroundImage = "var(--Avatar)"
				}
				catch {}
            }
        }, 10)
        
        if (!ranked_observer && rankedNode) {
            ranked_observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    if (mutation.target.classList.contains('visible')) {
                        let tmpInterval = window.setInterval(() => {
                            try {
                                document.querySelector("div.smoke-background-container > lol-uikit-parallax-background").shadowRoot.querySelector(".parallax-layer-container").style.backgroundImage = ''
                                window.clearInterval(tmpInterval)
                            }
                            catch {}
                        }, 500)
                    }
                })
            })
            ranked_observer.observe(document.querySelector('[section-id="profile_subsection_leagues"]'), { attributes: true, childList: false, subtree: false })
        }		
	}
	else if (previous_page == "rcp-fe-lol-profiles-main") {
        if (ranked_observer)
        ranked_observer.disconnect()
        ranked_observer = undefined
	}
	if (previous_page != pagename) {
		previous_page = pagename
	}
	if (DataStore.get("aram-only") && node.getAttribute("data-screen-name") == "rcp-fe-lol-parties") {
		window.setInterval(()=>{
			try{
				document.querySelector("div[data-game-mode='CLASSIC']").remove()
				document.querySelector("div[data-game-mode='TFT']").remove()
				document.querySelector("lol-uikit-navigation-item[data-category='VersusAi']").remove()
				document.querySelector("lol-uikit-navigation-item[data-category='Training']").remove()
			}
			catch{}
			try {
				if (document.getElementsByClassName("parties-game-navs-list")[0].getAttribute("selectedindex") == "0") {
					document.querySelector('div[data-game-mode=ARAM] div[class=parties-game-type-upper-half]').click()
				}
			}
			catch {}
		},10)
	}
}
//___________________________________________________________________________//



//___________________________________________________________________________//
window.setInterval(() => {
	if (DataStore.get("settings-dialogs-transparent")) {
		try {document.querySelector("lol-uikit-full-page-backdrop > lol-uikit-dialog-frame").shadowRoot.querySelector("div").style.background = "var(--Settings-and-Dialog-frame-color)"}catch{}
		try {document.querySelector("lol-uikit-full-page-backdrop > lol-uikit-dialog-frame > div").style.background = "var(--Settings-and-Dialog-frame-color)"}catch {}
		try {document.querySelector("lol-uikit-full-page-backdrop > lol-uikit-dialog-frame > div > div.challenges-identity-customizer-contents > div.challenges-identity-customizer-left-container > div > lol-regalia-identity-customizer-element").shadowRoot.querySelector("div > lol-regalia-banner-v2-element").remove()}catch{}
		try {document.querySelector(".lol-settings-container").style.background = "var(--Settings-and-Dialog-frame-color)"}catch {}
		try {document.querySelector(".lol-settings-container").shadowRoot.querySelector("div").style.background = "var(--Settings-and-Dialog-frame-color)"}catch{}
		try {document.querySelector("#lol-uikit-layer-manager-wrapper > div.modal > div > lol-uikit-dialog-frame").shadowRoot.querySelector("div").style.background = "var(--Settings-and-Dialog-frame-color)"}catch{}
	}

	if (DataStore.get("Custom-Avatar")) {
		try {
			document.querySelector("lol-uikit-full-page-backdrop > lol-uikit-dialog-frame > div > div.challenges-identity-customizer-contents > div.challenges-identity-customizer-left-container > div > lol-regalia-identity-customizer-element").
				shadowRoot.querySelector("div > div > div.regalia-identity-customizer-crest-wrapper > lol-regalia-crest-v2-element").
				shadowRoot.querySelector("div > uikit-state-machine > div.lol-regalia-summoner-icon-mask-container > div").style.backgroundImage = "var(--Avatar)"
				}
		catch {}
		try {
			document.querySelector("#hover-card-backdrop").style.backgroundImage = "var(--Hover-card-backdrop)"
			document.querySelector("#lol-uikit-tooltip-root > div > div > div.hover-card.right.has-regalia.regalia-loaded > div > div.hover-card-info-container").style.background = "#1a1c21"
			document.querySelector("#lol-uikit-tooltip-root > div > div > div.hover-card.right.has-regalia.regalia-loaded > div > div.hover-card-info-container > div.hover-card-identity > lol-regalia-hovercard-v2-element").
				shadowRoot.querySelector("lol-regalia-crest-v2-element").shadowRoot.querySelector("div > uikit-state-machine > div.lol-regalia-summoner-icon-mask-container > div").style.backgroundImage = "var(--Avatar)"
		}
		catch {}
	}
}, 500)
//___________________________________________________________________________//



//___________________________________________________________________________//
window.addEventListener('load', async () => {
	const manager = () => document.getElementById('lol-uikit-layer-manager-wrapper')
	const root    = document.createElement('div')
	if (DataStore.get("Custom-Status")) {CustomStatus()}
	if (DataStore.get("Custom-Rank(Hover-card)")) {CustomRank()}
	if (DataStore.get("aram-only")) {utils.addCss("","","",`${assetspath}/Css/Addon-Css/Aram-only.css`)}
	utils.addCss("","","",`${assetspath}/Css/ElainaV2.css`)

	utils.mutationObserverAddCallback(pageChangeMutation, ["screen-root"])
	utils.subscribe_endpoint("/lol-gameflow/v1/gameflow-phase", updateLobbyRegaliaBanner)
	utils.routineAddCallback(newTicker,["flyout"])
	utils.routineAddCallback(newGameSearch,["parties-game-section"])
	utils.routineAddCallback(CustomRP,["currency-rp"])
	utils.routineAddCallback(CustomBE,["currency-be"])

	if (DataStore.get("Old-League-Loader-Settings")) {
		while (!manager()) await new Promise(r => setTimeout(r, 200))
		await createLoaderMenu(root)
		manager().prepend(root)
	}

	console.log('By Elaina Da Catto');
	console.log('Meow ~~~');
})