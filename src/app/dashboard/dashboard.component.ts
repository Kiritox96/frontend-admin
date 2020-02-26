import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedFiles: FileList;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  selectFile(event) {
  this.selectedFiles = event.target.files;
  }
  upload() {
    const file = this.selectedFiles.item(0);
    const contentType = file.type;
    const bucket = new S3({
      accessKeyId: 'AKIAYVYV3YCY7RAIYZNV',
      secretAccessKey: '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'
    });
    const params = {
        Bucket: 'admin-upload-otaku-world',
        Key: file.name,
        Body: file,
        ACL: 'public-read',
        ContentType: contentType
    };
    bucket.upload(params, (err, data) => {
        if (err) {
            console.log('There was an error uploading your file: ', err);
            return false;
        }
        console.log('Successfully uploaded file.', data);
        return true;
    });
  }

}
