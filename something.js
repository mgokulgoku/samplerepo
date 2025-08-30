const btn = document.getElementById('btn')
        const CardContent = document.getElementById('CardContent')

        const generateCard = () => {

            const userDetails = [{ name: 'Gokul', email: 'gokul@example.com', city: 'karaikudi', photo: 'https://i.pravatar.cc/80?img=1' },
            { name: 'Steve', email: 'steve@example.com', city: 'karaikudi', photo: 'https://i.pravatar.cc/80?img=2' },
            { name: 'Elon', email: 'elon@example.com', city: 'karaikudi', photo: 'https://i.pravatar.cc/80?img=3' }];

            const btn = document.getElementById('btn')
        const CardContent = document.getElementById('CardContent')

        const generateCard = () => {

            const userDetails = [{ name: 'Gokul', email: 'gokul@example.com', city: 'karaikudi', photo: 'https://i.pravatar.cc/80?img=1' },
            { name: 'Steve', email: 'steve@example.com', city: 'karaikudi', photo: 'https://i.pravatar.cc/80?img=2' },
            { name: 'Elon', email: 'elon@example.com', city: 'karaikudi', photo: 'https://i.pravatar.cc/80?img=3' }];

            const randNum = userDetails[Math.floor(Math.random() * userDetails.length)];
            CardContent.innerHTML = `<div class="userCard">
                                             <img src= ${randNum.photo}></img>
                                             <h3>${randNum.name}</h3>
                                             <p>${randNum.email}</p>
                                             <p>${randNum.city}</p>
                                             </div>`;
        }

        
        }

        
