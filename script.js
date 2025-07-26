
function showAlert() {
          alert('Learn more about sustainable agriculture!');
      }
      
      function handleLogin(event) {
          event.preventDefault();
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
      
          if (email === "user@example.com" && password === "password") {
              alert("Login successful!");
                            window.location.href = 'prediction.html';
      
          } else {
              alert("Invalid email or password.");
          }
      }
      
      function loadServices() {
          const services = [
              {
                  title: 'Organic Farming',
                  description: 'Providing organic solutions to improve crop yield.'
              },
              {
                  title: 'Soil Analysis',
                  description: 'In-depth soil analysis for better crop management.'
              },
              {
                  title: 'Consulting',
                  description: 'Expert advice for efficient and sustainable farming.'
              },
              {
                  title: 'Crop Price Prediction',
                  description: 'Advanced analytics to predict crop prices for better planning.'
              }
          ];
      
          const serviceCardsContainer = document.getElementById('service-cards');
      
          services.forEach(service => {
              const card = document.createElement('div');
              card.className = 'card';
      
              const title = document.createElement('h3');
              title.innerText = service.title;
              card.appendChild(title);
      
              const description = document.createElement('p');
              description.innerText = service.description;
              card.appendChild(description);
      
              serviceCardsContainer.appendChild(card);
          });
      }
      
      window.onload = function() {
          loadServices();
      }

      
      