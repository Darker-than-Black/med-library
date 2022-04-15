import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

import { NOTIFICATION_TYPES } from '../notificationTypes';

const NOTIFICATION_TIMEOUT = 5000;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private messageService: MessageService) {}

  add(detail: string, severity: NOTIFICATION_TYPES = NOTIFICATION_TYPES.INFO) {
    this.messageService.add({ severity, detail, life: NOTIFICATION_TIMEOUT });
  }
}
