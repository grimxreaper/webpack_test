// alert('HELLO FROM WEBPACK!')
import { run } from "./app/app";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
import "./main.scss";
console.log('hi')
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);