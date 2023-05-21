export function renderFooter() {
    const footerContainer = document.querySelector(".footerPlaceHolder");

    footerContainer.innerHTML = `
    
        <div>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-vimeo"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram-square"></i>
        </div>
        <div>Copyright 2022 &copy; AKS <a href="terms.html">Terms</a> | <a href="policy.html">Privacy Policy</a></div>        
    `;
}