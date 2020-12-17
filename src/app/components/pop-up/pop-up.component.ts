import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';

enum HttpRequestStatus {
  UNSENT = 'unsent',
  SENT = 'sent',
  SUCCESS = 'success',
  ERROR = 'error'
}

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  @Output() dismiss = new EventEmitter<Event>();

  email = '';
  isInterestedInNewsletter = false;
  HttpRequestStatus = HttpRequestStatus
  httpRequestStatus = HttpRequestStatus.UNSENT;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  onChangeEmail(email: string) {
    this.email = email;
  }

  onChangeCheckbox(isChecked: boolean) {
    this.isInterestedInNewsletter = isChecked;
  }

  onSubmit(event) {
    event.preventDefault();
    this.httpRequestStatus = HttpRequestStatus.SENT
    this.httpClient.get(
      `${environment.apiUrl}/mails/send-mail?email=${this.email}&isInterestedInNewsletter=${this.isInterestedInNewsletter}`
    ).toPromise()
    .then(res => {
      this.httpRequestStatus = HttpRequestStatus.SUCCESS
    })
    .catch(res => {
      this.httpRequestStatus = HttpRequestStatus.ERROR
    })
    .finally(() => {
      setTimeout(() => {
        this.dismiss.emit();
      }, 2000)
    })
  }
}
