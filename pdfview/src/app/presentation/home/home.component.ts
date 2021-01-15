import {Component, OnInit} from '@angular/core';
import {DocumentRepositoryService} from '../../domain/documents/document-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  email: string;

  constructor(private documentRepository: DocumentRepositoryService) {
  }

  ngOnInit(): void {
  }

  generate(): void {
    this.documentRepository.generatePdf(this.email).subscribe((document: ArrayBuffer) => {
      const fileURL = URL.createObjectURL(new Blob([document], {type: 'application/pdf'}));
      window.open(fileURL, '_blank');
    }, error => {
      console.log('got an error:', error);
    });
  }
}
