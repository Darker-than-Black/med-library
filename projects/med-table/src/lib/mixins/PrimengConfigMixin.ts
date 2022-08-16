import { FilterService, PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

import { TemplatesMixin } from './TemplatesMixin';
import { PRIMENG_TRANSLATIONS } from '../configs/primengTranslations';
import { FilterMethods } from "../services/FilterDataHandler/FilterMethods";

@Component({
  template: '',
})
export class PrimengConfigMixin extends TemplatesMixin implements OnInit {
   constructor(private primeConfig: PrimeNGConfig, private filterService: FilterService) {
     super();
   }

  ngOnInit() {
    this.primeConfig.setTranslation(PRIMENG_TRANSLATIONS);

    this.filterService.register('custom-contains', FilterMethods.textHandler);
  }
}
