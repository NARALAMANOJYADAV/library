document.querySelectorAll('details > summary').forEach(summary => {
            summary.addEventListener('click', function(event) {
                event.stopPropagation();
                let parentDetails = this.parentElement;
                let allDetails = parentDetails.parentElement.querySelectorAll('details');
                
                allDetails.forEach(details => {
                    if (details !== parentDetails) {
                        details.removeAttribute('open');
                    }
                });
            });
        });