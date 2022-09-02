import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MgModalService } from './modal.service';

@Component({
  selector: 'mg-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})
export class MgModalComponent implements OnInit, OnDestroy {
  @Input() size = 'small'; // medium | large

  constructor(private _modalService: MgModalService) {}

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
