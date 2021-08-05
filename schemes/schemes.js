// This software is free for personal use.
// For commercial use fees apply. Please contact hello@thingware.ch for licensing this software.
// Created by: Jan Schär | https://shopofthings.ch

class Schemes {
      constructor() {
            this.scheme = [];
      }
      add(scheme) {
            this.scheme.push(scheme);
      }
      get(device) {
            for (let i = 0; i < this.scheme.length; i++) {
                  if (this.scheme[i].device === device) {
                        return this.scheme[i];
                  }
            }
      }
      getDevices() {
            let keys = [];
            for (let i = 0; i < this.scheme.length; i++) {
                  keys.push(this.scheme[i].device);
            }
            return keys;
      }
}


let schemes = new Schemes();
