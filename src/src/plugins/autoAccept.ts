import utils from '../utils/utils.ts';
import * as upl from "pengu-upl"

let queue_accepted: boolean = false 
let player_declined: boolean = false 

export class AutoAccept {
	autoAcceptQueueButtonSelect() {
		let element: any = document.getElementById("autoAcceptQueueButton")
		if (element?.attributes.selected != undefined) {
			window.DataStore.set("auto_accept", false)
			element.removeAttribute("selected")
		}
		else {
			element?.setAttribute("selected", "true")
			window.DataStore.set("auto_accept", true)
		}
	}
	
	fetch_or_create_champselect_buttons_container(): Element | null {
		if (document.querySelector(".cs-buttons-container")) {
			return document.querySelector(".cs-buttons-container")
		}
		else {
			const div = document.createElement("div")
			div.className = "cs-buttons-container"
	
			let nor: HTMLElement | null = document.querySelector(".v2-footer-notifications.ember-view")
			let tft: HTMLElement | null = document.querySelector(".parties-footer-notifications.ember-view")
	
			if (nor) {
				nor.append(div)
				return div
			}
			else { 
				tft?.append(div)
				return div
			}
		}	
	}

	acceptMatchmaking = async (): Promise<void> => {
		if (player_declined) return;
		await fetch('/lol-matchmaking/v1/ready-check/accept', { method: 'POST' })
	}

	autoAcceptCallback = async (message: Object) => {
		utils.phase = JSON.parse(message["data"])[2]["data"]
		if (utils.phase == "ReadyCheck" && window.DataStore.get("auto_accept") && !queue_accepted) {
			await this.acceptMatchmaking(),
			queue_accepted = true
		}
		else if (utils.phase != "ReadyCheck") {
			queue_accepted = false
		}
	}

	main = (auto_accept_button: boolean = true) => {
		window.autoAcceptQueueButtonSelect = this.autoAcceptQueueButtonSelect

		upl.observer.subscribeToElementCreation(".v2-lobby-root-component.ember-view .v2-footer-notifications.ember-view",async (element: any) => {
			const newOption = document.createElement("lol-uikit-radio-input-option")
			const container = this.fetch_or_create_champselect_buttons_container()
			const Option2 = document.createElement("div")
			
			newOption.setAttribute("id", "autoAcceptQueueButton")
			newOption.setAttribute("onclick", "window.autoAcceptQueueButtonSelect()")
		
			Option2.classList.add("auto-accept-button-text")
			Option2.innerHTML = await getString("auto_accept")
		
			if (window.DataStore.get("auto_accept")){
				newOption.setAttribute("selected", "")
			}
		
			if (element && !document.getElementById("autoAcceptQueueButton")) {
				if (window.DataStore.get("auto_accept_button")) {
					container?.append(newOption)
					newOption.append(Option2)
				}
			}
		})

		if (auto_accept_button) {
			utils.subscribe_endpoint('/lol-gameflow/v1/gameflow-phase', this.autoAcceptCallback)
		}
	} 
}