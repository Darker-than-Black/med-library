import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

import { TemplatesMixin } from './TemplatesMixin';
import { PRIMENG_TRANSLATIONS } from '../configs/primengTranslations';

@Component({
  template: '',
})
export class PrimengConfigMixin extends TemplatesMixin implements OnInit {
   constructor(private primeConfig: PrimeNGConfig) {
     super();
   }

  ngOnInit() {
    this.primeConfig.setTranslation(PRIMENG_TRANSLATIONS);
   }
}
