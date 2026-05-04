import { Component, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'custom-report-aproblem',
  standalone: true,
  imports: [],
  templateUrl: './report-aproblem.component.html',
  styleUrl: './report-aproblem.component.scss'
})

export class ReportAproblemComponent implements AfterViewInit {
constructor(private location: Location, private router: Router) {}
extractedText: string = '';
openURLTitle: any;
openURLSource: any;
currentUrl: any;
encoded: string = '';


ngAfterViewInit(): void {
  setTimeout(() => {

    const viewItExists =  document.querySelector('nde-view-it');
    const getItExists =  document.querySelector('nde-get-it');
    const requestsExists = document.querySelector('nde-requests-after-from-remote-0');
    const locationItemsAfterExists = document.querySelector('nde-location-items-container-after-from-remote-0');
    const getItAfterFromRemoteExists = document.querySelector('nde-get-it-after-from-remote-0');

  
    if (viewItExists || locationItemsAfterExists || getItAfterFromRemoteExists ) {
      requestsExists?.remove();
    } 

    if (getItAfterFromRemoteExists) {
      locationItemsAfterExists?.remove();
    }

    if (viewItExists) {
      locationItemsAfterExists?.remove();
      requestsExists?.remove();
    }

    const itemTitle = document.querySelector('div[data-qa="detail_title"] div[aria-label]');

    if (itemTitle) {
      this.extractedText = itemTitle.getAttribute('aria-label')?.trim() || '';
      this.openURLTitle = this.extractedText;
    } else {
      console.warn('Title element not found in DOM.');
    }

    const itemSource = document.querySelector('div[data-qa="detail_source"] div[aria-label]');

    if (itemSource) {
      this.extractedText = itemSource.getAttribute('aria-label')?.trim() || '';
      this.openURLSource = this.extractedText;
    } else {
      console.warn('Source element not found in DOM.');
    }

    this.currentUrl = this.location.path(); // Get current URL
    const itemId = this.currentUrl;    // Assign URL to variable
    this.encoded = encodeURIComponent(itemId); //Encodes string as URL
 

  }, 600); // Small delay to ensure DOM is loaded
}

}
