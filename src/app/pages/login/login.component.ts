import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent],
  template: `
  <div class="relative h-full">
  <img class="absolute left-0 top-0 w-full h-full object-cover" src="./assets/messi.jpg" alt="Messi" />
  <div class="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
  <div class="absolute left-0 top-0 w-full h-full z-20 flex flex-col justify-start items-center  pt-[51px] pb-10">
    <img src="./assets/stars.png" alt='stars' class="w-[177px] h-[67px]"/>
    <p class="text-white text-sm w-[300px] mt-[80px]">E-mail</p>
    <input type="text" class="w-[328px] h-[56px] bg-[#787B7B] bg-opacity-[.64] rounded-lg border border-[#A9EBF6]"/>
    <p class="text-white text-sm w-[300px] mt-4">Contraseña</p>
    <input type="text" class="w-[328px] h-[56px] bg-[#787B7B] bg-opacity-[.64] rounded-lg border border-[#A9EBF6]"/>
    <div class="flex flex-row w-1/3 -ml-44 gap-4 items-center my-2 mt-4">
      <p class="text-white text-sm">Recordarme</p>
      <input type="checkbox" class="bg-transparent w-4 h-4 appearance-none border-2 border-white rounded-sm cursor-pointer" />
    </div>
    <app-button class="w-[328px] h-14 mt-5" [text]="buttonText"/>
    <app-button class="w-[235px] h-10 rounded-3xl mt-2" [text]="buttonText2"/>
    <button class="text-sm font-medium w-[193px] h-[46px] bg-white rounded-3xl flex flex-row justify-around items-center px-2 mt-3"><span ><img src='../assets/google.png' alt='google' class='h-[18px] w-[18px]'/></span>Ingresar con Google</button>
    <p class="text-xs text-white underline cursor-pointer mt-5">Olvidé mi contraseña</p>
  </div>
</div>
  `,
  styles: ``
})
export class LoginComponent {

  buttonText: string = 'Ingresar'
  buttonText2: string = 'Registrarse'
}
