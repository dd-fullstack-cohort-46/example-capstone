import { App } from './App'
import {PublicProfile} from "./apis/profile/profile.model";


declare module 'express-session' {
  export interface SessionData {
    profile: PublicProfile|undefined
    signature: string|undefined
    jwt: string|undefined
  }
}

// instantiate new app and pass it a port as an argument to start with (4200)
async function main (): Promise<void> {
  try {
    const app = new App(4200)
    await app.listen()
  } catch (e) {
    console.log(e)
  }
}

main().catch(error => { console.error(error) })
