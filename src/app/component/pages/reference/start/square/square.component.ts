import { Component } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
  public files: NgxFileDropEntry[] = [];
  selected_video ="";
  selected_audio="";
  selected_text="";
  displayed_text="Record a video";
  constructor(){
    localStorage.setItem('showLogin','false');
  }
  public select(val:any){
    if(val =="video"){
      this.selected_video ="selected_video";
      this.selected_audio="";
      this.selected_text="";
      this.displayed_text = "Record a video";
    }

    if(val =="audio"){
      this.selected_video ="";
      this.selected_audio="selected_audio";
      this.selected_text="";
      this.displayed_text = "record an audio";
    }
    if(val =="text"){
      this.selected_video ="";
      this.selected_audio="";
      this.selected_text="selected_text";
      this.displayed_text = "add";
    }


  }
  public decline(){
    console.log("Data -- decline");
  }
  public complete(value:any){
    console.log("Data -- complete");

  }
  public removeFile(){
    this.files = [];
  }
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event:any){
    console.log(event);
  }

  public fileLeave(event:any){
    console.log(event);
  }
  public startRecording(){
    navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
  });
  }

}
