import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'mg-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})
export class MgModalComponent implements OnInit, OnDestroy {
  constructor(private _modalService: ModalService) {}

  open(): void {}

  // close modal
  close(): void {
    this._modalService.destroy();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // this._modalService.unset();
  }
}
