export class SellerCardComponent {

  seller: any;

  viewProfile() {
    console.log('Navigate to seller profile');
    // router.navigate(['/profile', this.seller.id]);
  }

  contactSeller() {
    console.log('Contact seller');
    // later: WhatsApp / chat integration
  }
}