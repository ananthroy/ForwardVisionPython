import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upload-component',
  templateUrl: './upload-component.component.html',
  styleUrls: ['./upload-component.component.css']
})
export class UploadComponentComponent {
  extractedContent: string | undefined;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      this.http.post('http://127.0.0.1:5000/extract-docx', formData).subscribe(
        (response: any) => {
          this.extractedContent = response.content;
        },
        (error: any) => {
          console.error('Error extracting DOCX file:', error);
        }
      );
    }
  }
}
