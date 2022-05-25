import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectCharter } from 'src/Data/ProjectCharter';
import { DocumentationService } from '../Software-Documentation-Service/Software-Documentation.service';

@Component({
  selector: 'app-project-charter-create',
  templateUrl: './project-charter-create.component.html',
  styleUrls: ['./project-charter-create.component.css']
})
export class ProjectCharterCreateComponent implements OnInit {

  constructor(private _DocumentationService:DocumentationService,
              private route:ActivatedRoute,
              private router:Router) { }

    public projectCharter:ProjectCharter = new ProjectCharter(0,'',new Date(),new Date(),'','',0,'');
    public dateValidation:boolean = false;

    onSubmit(ProjectCharter:ProjectCharter) {
      this._DocumentationService.addPhase(ProjectCharter);
      console.log(this.projectCharter);
      this.router.navigate(['/sdlc']);
    }
    
    disposeThisComponent() {
      this.router.navigate(['/sdlctt']);
      const doc = document.getElementById('sp')!;
      doc.setAttribute("style", "display:none")!;
      doc.setAttribute("value", "default");
    }

    ngOnInit(): void {
    }

    
}
