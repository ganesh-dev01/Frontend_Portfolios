import React, { useState } from 'react';
import './Destination.css';
import kolkataimg from '../../Images/city1.jpg';
import chennaiimg from '../../Images/city1.jpg';
import bangaloreimg from '../../Images/city1.jpg';
import delhiimg from '../../Images/city1.jpg';
import mumbaiimg from '../../Images/city1.jpg';
import hyderabadimg from '../../Images/city1.jpg';
import ahmedabadimg from '../../Images/city1.jpg';
import puneimg from '../../Images/city1.jpg';

function Destination() {
    let [val, setVal] = useState(0);

    let handelClick = (i) => {
        setVal(i);
    }

    let city = ['Kolkata', 'Chennai', 'Bangalore', 'Delhi', 'Mumbai', 'Hyderabad', 'Ahmedabad', 'Pune'];

    let Obj = [
        [
            {
                id: 0,
                image: kolkataimg,
                title: 'Victoria Memorial',
                description: `Victoria Memorial is a stunning marble monument built in memory of Queen Victoria. It's a 
                major tourist attraction known for its museum, vast gardens, and architectural beauty, symbolizing Kolkata’s colonial past.`
            },
            {
                id: 1,
                image: kolkataimg,
                title: 'Howrah Bridge',
                description: `Howrah Bridge is a famous cantilever bridge spanning the Hooghly River, connecting Kolkata and Howrah. 
                It's a marvel of engineering and one of the busiest bridges in the world, making it an iconic symbol of the city.`
            },
            {
                id: 2,
                image: kolkataimg,
                title: 'Dakshineswar Kali Temple',
                description: `Dakshineswar Kali Temple is one of Kolkata’s most important religious landmarks. Dedicated to Goddess Kali, 
                it attracts both pilgrims and tourists with its stunning riverside location and spiritual significance.`
            },
            {
                id: 3,
                image: kolkataimg,
                title: 'Indian Museum',
                description: `The Indian Museum in Kolkata, established in 1814, is the oldest and largest museum in India. It features 
                rare collections of ancient artifacts, fossils, and cultural relics, making it a must-visit for history buffs.`
            },
            {
                id: 4,
                image: kolkataimg,
                title: 'Belur Math',
                description: `Belur Math is the headquarters of the Ramakrishna Mission, located on the banks of the Hooghly River. The peaceful 
                temple complex is famous for its unique fusion of architectural styles and its spiritual atmosphere.`
            },
            {
                id: 5,
                image: kolkataimg,
                title: 'Science City',
                description: `Science City is a popular science museum and education center in Kolkata. With interactive exhibits, 
                a space theater, and a variety of scientific displays, it's an exciting destination for families and tourists alike.`
            },
            {
                id: 6,
                image: kolkataimg,
                title: 'Marble Palace',
                description: `Marble Palace is a stunning 19th-century mansion in North Kolkata, renowned for its neoclassical architecture 
                and art collection, including rare sculptures and paintings. It offers a glimpse into Kolkata's rich cultural heritage.`
            },
            {
                id: 7,
                image: kolkataimg,
                title: 'St. Paul’s Cathedral',
                description: `St. Paul’s Cathedral is a beautiful Anglican cathedral in Kolkata, noted for its Gothic architecture. 
                The serene environment and historical significance make it a popular tourist attraction.`
            },
            {
                id: 8,
                image: kolkataimg,
                title: 'Prinsep Ghat',
                description: `Prinsep Ghat is a picturesque riverside spot along the Hooghly River, famous for its Palladian porch and 
                scenic views, especially during sunset. It's a favorite spot for both locals and tourists for leisurely walks and boat rides.`
            },
            {
                id: 9,
                image: kolkataimg,
                title: 'Jorasanko Thakur Bari',
                description: `Jorasanko Thakur Bari, the ancestral home of Nobel laureate Rabindranath Tagore, is now a museum dedicated to 
                his life and works. It's a cultural treasure and a must-visit for those interested in Bengali literature and history.`
            }
        ],

        [
            {
                id: 0,
                image: chennaiimg,
                title: 'Marina Beach',
                description: `Marina Beach is the longest urban beach in India, stretching along the Bay of Bengal. It's a popular spot 
                for locals and tourists alike, offering stunning sunrise views, a lively promenade, and various food stalls.`
            },
            {
                id: 1,
                image: chennaiimg,
                title: 'Kapaleeshwarar Temple',
                description: `Kapaleeshwarar Temple is a historic Hindu temple dedicated to Lord Shiva, known for its Dravidian architecture 
                and vibrant gopurams (towering gateways). It is one of the most revered spiritual sites in Chennai.`
            },
            {
                id: 2,
                image: chennaiimg,
                title: 'Fort St. George',
                description: `Fort St. George, built in 1644 by the British East India Company, is the oldest British fortress in India. 
                It now houses a museum showcasing artifacts from colonial times, making it a key historical landmark in Chennai.`
            },
            {
                id: 3,
                image: chennaiimg,
                title: 'San Thome Basilica',
                description: `San Thome Basilica is a grand Roman Catholic church built over the tomb of St. Thomas, one of the twelve apostles 
                of Jesus Christ. The church is renowned for its stunning architecture and religious significance.`
            },
            {
                id: 4,
                image: chennaiimg,
                title: 'Government Museum',
                description: `The Government Museum in Chennai, established in 1851, is one of India's oldest museums. It features an 
                extensive collection of archaeological finds, sculptures, and art, making it a must-visit for history enthusiasts.`
            },
            {
                id: 5,
                image: chennaiimg,
                title: 'Valluvar Kottam',
                description: `Valluvar Kottam is a grand monument built to honor the famous Tamil poet and philosopher, Thiruvalluvar. 
                The structure, shaped like a traditional temple chariot, is a key cultural landmark in the city.`
            },
            {
                id: 6,
                image: chennaiimg,
                title: 'Elliot’s Beach',
                description: `Elliot’s Beach is a serene coastal spot in Chennai, popular for its calm atmosphere and clean sands. 
                It’s a favorite destination for those seeking a peaceful retreat away from the city's hustle.`
            },
            {
                id: 7,
                image: chennaiimg,
                title: 'Guindy National Park',
                description: `Guindy National Park is a green oasis in the heart of Chennai, offering a sanctuary for various species 
                of wildlife, including blackbucks and spotted deer. It’s a great spot for nature lovers and families.`
            },
            {
                id: 8,
                image: chennaiimg,
                title: 'Arignar Anna Zoological Park',
                description: `Arignar Anna Zoological Park, also known as Vandalur Zoo, is one of the largest zoos in India. It houses 
                a wide variety of animals and is a popular destination for both tourists and wildlife enthusiasts.`
            },
            {
                id: 9,
                image: chennaiimg,
                title: 'Thousand Lights Mosque',
                description: `Thousand Lights Mosque is a stunning multi-domed mosque in Chennai, known for its unique architecture 
                and historical significance. It's an important place of worship for the city's Muslim community and a notable landmark.`
            }
        ],

        [
            {
                id: 0,
                image: bangaloreimg,
                title: 'Lalbagh Botanical Garden',
                description: `Lalbagh Botanical Garden is a historic garden in Bangalore, known for its stunning glasshouse, 
                annual flower shows, and rare collection of tropical plants. It’s a serene retreat for nature lovers.`
            },
            {
                id: 1,
                image: bangaloreimg,
                title: 'Bangalore Palace',
                description: `Bangalore Palace is a majestic structure inspired by England's Windsor Castle. With its beautiful architecture, 
                sprawling gardens, and royal artifacts, it's a must-visit for history and architecture enthusiasts.`
            },
            {
                id: 2,
                image: bangaloreimg,
                title: 'Cubbon Park',
                description: `Cubbon Park is a sprawling green oasis in the heart of Bangalore, offering lush landscapes, walking paths, 
                and statues. It’s a perfect place for picnics, leisurely strolls, and morning jogs.`
            },
            {
                id: 3,
                image: bangaloreimg,
                title: 'ISKCON Temple',
                description: `The ISKCON Temple in Bangalore is a grand temple dedicated to Lord Krishna. Known for its spiritual atmosphere 
                and beautiful architecture, it attracts devotees and tourists alike.`
            },
            {
                id: 4,
                image: bangaloreimg,
                title: 'Tipu Sultan’s Summer Palace',
                description: `Tipu Sultan’s Summer Palace is a historic landmark in Bangalore, known for its Indo-Islamic architecture. 
                It offers a glimpse into the life of Tipu Sultan, the ruler of Mysore, and his legacy.`
            },
            {
                id: 5,
                image: bangaloreimg,
                title: 'Bannerghatta National Park',
                description: `Bannerghatta National Park is a vast wildlife sanctuary located on the outskirts of Bangalore. 
                It features a zoo, a safari park, and a butterfly park, making it a popular destination for families and nature enthusiasts.`
            },
            {
                id: 6,
                image: bangaloreimg,
                title: 'Vidhana Soudha',
                description: `Vidhana Soudha is an iconic landmark in Bangalore, serving as the seat of the Karnataka State Legislature. 
                The massive granite building is a fine example of Neo-Dravidian architecture and a symbol of the city’s political importance.`
            },
            {
                id: 7,
                image: bangaloreimg,
                title: 'Nandi Hills',
                description: `Nandi Hills, located just outside Bangalore, is a popular hill station known for its breathtaking sunrise views, 
                trekking opportunities, and historical significance as a summer retreat for rulers.`
            },
            {
                id: 8,
                image: bangaloreimg,
                title: 'Innovative Film City',
                description: `Innovative Film City is an entertainment park near Bangalore that offers a mix of amusement rides, museums, 
                and film studio experiences. It’s a fun destination for families and those looking for a day of entertainment.`
            },
            {
                id: 9,
                image: bangaloreimg,
                title: 'Commercial Street',
                description: `Commercial Street is a bustling shopping hub in Bangalore, known for its variety of clothing, jewelry, and 
                handicrafts. It’s a favorite spot for both locals and tourists looking for a shopping spree.`
            }
        ],

        [
            {
                id: 0,
                image: delhiimg,
                title: 'India Gate',
                description: `India Gate is a war memorial located in the heart of Delhi, dedicated to Indian soldiers who died in World War I. 
                It’s an iconic landmark surrounded by lush gardens, making it a popular spot for tourists and locals.`
            },
            {
                id: 1,
                image: delhiimg,
                title: 'Red Fort',
                description: `The Red Fort, a UNESCO World Heritage Site, is a stunning example of Mughal architecture. 
                Built in the 17th century, it served as the residence of Mughal emperors and remains a major historical attraction in Delhi.`
            },
            {
                id: 2,
                image: delhiimg,
                title: 'Qutub Minar',
                description: `Qutub Minar is the tallest brick minaret in the world, and a UNESCO World Heritage Site. 
                This ancient monument is renowned for its intricate carvings and historical significance, dating back to the 12th century.`
            },
            {
                id: 3,
                image: delhiimg,
                title: 'Lotus Temple',
                description: `The Lotus Temple is a Bahá'í House of Worship known for its distinctive lotus-shaped architecture. 
                It is open to all, irrespective of religion, and provides a serene environment for meditation and reflection.`
            },
            {
                id: 4,
                image: delhiimg,
                title: 'Humayun’s Tomb',
                description: `Humayun’s Tomb, a UNESCO World Heritage Site, is the resting place of the Mughal Emperor Humayun. 
                The tomb is a beautiful example of Mughal architecture and inspired the design of the Taj Mahal.`
            },
            {
                id: 5,
                image: delhiimg,
                title: 'Jama Masjid',
                description: `Jama Masjid is one of the largest mosques in India, built by Mughal Emperor Shah Jahan. 
                Known for its grand scale and stunning architecture, it remains a significant place of worship and tourist attraction.`
            },
            {
                id: 6,
                image: delhiimg,
                title: 'Akshardham Temple',
                description: `Akshardham Temple is a modern architectural marvel in Delhi, showcasing traditional Indian and Hindu culture. 
                With its intricate carvings, spiritual exhibitions, and sprawling gardens, it’s a must-visit destination.`
            },
            {
                id: 7,
                image: delhiimg,
                title: 'Rashtrapati Bhavan',
                description: `Rashtrapati Bhavan is the official residence of the President of India. 
                This grand structure, with its lush Mughal Gardens, offers visitors a glimpse of India’s political history and architectural brilliance.`
            },
            {
                id: 8,
                image: delhiimg,
                title: 'Chandni Chowk',
                description: `Chandni Chowk is one of Delhi’s oldest and busiest markets, known for its narrow lanes, bustling shops, 
                street food, and vibrant atmosphere. It’s a must-visit for those looking to experience the local culture and cuisine.`
            },
            {
                id: 9,
                image: delhiimg,
                title: 'Lodhi Gardens',
                description: `Lodhi Gardens is a peaceful green space in Delhi, dotted with beautiful tombs and historical structures from the 
                15th century. It’s a popular spot for morning walks, picnics, and a quiet escape from the city’s hustle.`
            }
        ],

        [
            {
                id: 0,
                image: mumbaiimg,
                title: 'Gateway of India',
                description: `The Gateway of India is an iconic arch-monument overlooking the Arabian Sea. Built to commemorate 
                the visit of King George V and Queen Mary to India, it is one of Mumbai’s most famous landmarks.`
            },
            {
                id: 1,
                image: mumbaiimg,
                title: 'Marine Drive',
                description: `Marine Drive, also known as the Queen’s Necklace, is a famous 3.6 km boulevard along the Arabian Sea. 
                It offers stunning sunset views and is a popular spot for evening walks and leisurely drives.`
            },
            {
                id: 2,
                image: mumbaiimg,
                title: 'Chhatrapati Shivaji Maharaj Terminus',
                description: `A UNESCO World Heritage Site, Chhatrapati Shivaji Maharaj Terminus (formerly Victoria Terminus) is a historic 
                railway station known for its Gothic-style architecture and its significance in Mumbai’s transportation network.`
            },
            {
                id: 3,
                image: mumbaiimg,
                title: 'Elephanta Caves',
                description: `The Elephanta Caves are a network of rock-cut cave temples located on Elephanta Island, just off the coast of Mumbai. 
                These ancient temples, dedicated to Lord Shiva, are a UNESCO World Heritage Site and a popular day trip from the city.`
            },
            {
                id: 4,
                image: mumbaiimg,
                title: 'Juhu Beach',
                description: `Juhu Beach is one of the most famous beaches in Mumbai, known for its lively atmosphere, street food stalls, and 
                proximity to the homes of Bollywood celebrities. It’s a popular spot for both tourists and locals.`
            },
            {
                id: 5,
                image: mumbaiimg,
                title: 'Sanjay Gandhi National Park',
                description: `Sanjay Gandhi National Park is a sprawling green area located within Mumbai’s city limits, offering trekking trails, 
                wildlife, and the ancient Kanheri Caves. It’s a great destination for nature lovers and adventure enthusiasts.`
            },
            {
                id: 6,
                image: mumbaiimg,
                title: 'Haji Ali Dargah',
                description: `Haji Ali Dargah is a beautiful mosque and tomb located on an islet off the coast of Worli. 
                It is a significant religious site and is known for its unique location and Indo-Islamic architecture.`
            },
            {
                id: 7,
                image: mumbaiimg,
                title: 'Chor Bazaar',
                description: `Chor Bazaar, one of the oldest markets in Mumbai, is famous for its antiques, vintage items, and bustling street 
                market vibe. It’s a treasure trove for collectors and those seeking unique souvenirs.`
            },
            {
                id: 8,
                image: mumbaiimg,
                title: 'Siddhivinayak Temple',
                description: `The Siddhivinayak Temple is a popular Hindu temple dedicated to Lord Ganesha. Located in the heart of Mumbai, 
                it attracts millions of devotees and is a significant place of worship in the city.`
            },
            {
                id: 9,
                image: mumbaiimg,
                title: 'Colaba Causeway',
                description: `Colaba Causeway is a bustling shopping street in South Mumbai, known for its vibrant atmosphere, eclectic shops, 
                cafes, and historical buildings. It’s a great spot for shopping and experiencing the city’s lively culture.`
            }
        ],

        [
            {
                id: 0,
                image: hyderabadimg,
                title: 'Charminar',
                description: `Charminar is the most famous landmark of Hyderabad, known for its four grand arches and minarets. 
                Built in the 16th century, it stands as a symbol of the city’s rich history and is surrounded by bustling markets.`
            },
            {
                id: 1,
                image: hyderabadimg,
                title: 'Golconda Fort',
                description: `Golconda Fort is a massive fortress with a rich history dating back to medieval times. 
                It is known for its grand architecture, acoustic marvels, and breathtaking views of Hyderabad from the top.`
            },
            {
                id: 2,
                image: hyderabadimg,
                title: 'Hussain Sagar Lake',
                description: `Hussain Sagar Lake is a heart-shaped lake in Hyderabad, famous for the large Buddha statue at its center. 
                It offers boating experiences and is a popular spot for relaxation and picnics.`
            },
            {
                id: 3,
                image: hyderabadimg,
                title: 'Ramoji Film City',
                description: `Ramoji Film City is one of the largest film studio complexes in the world. It offers guided tours, 
                theme park attractions, and behind-the-scenes glimpses into the movie-making industry, making it a must-visit for film enthusiasts.`
            },
            {
                id: 4,
                image: hyderabadimg,
                title: 'Chowmahalla Palace',
                description: `Chowmahalla Palace is a magnificent palace complex that was once the seat of the Asaf Jahi dynasty. 
                It is known for its opulent architecture, grand courtyards, and rich heritage of the Nizams.`
            },
            {
                id: 5,
                image: hyderabadimg,
                title: 'Mecca Masjid',
                description: `Mecca Masjid is one of the oldest and largest mosques in India. Located near Charminar, 
                it is an architectural marvel built from granite and named after the holy city of Mecca.`
            },
            {
                id: 6,
                image: hyderabadimg,
                title: 'Birla Mandir',
                description: `Birla Mandir is a beautiful white marble temple located on a hilltop in Hyderabad. 
                Dedicated to Lord Venkateswara, it offers panoramic views of the city and is a peaceful spot for worship and reflection.`
            },
            {
                id: 7,
                image: hyderabadimg,
                title: 'Salar Jung Museum',
                description: `The Salar Jung Museum is one of the largest museums in India, housing an extensive collection of art, artifacts, 
                and antiques from around the world. It’s a treasure trove for history and art enthusiasts.`
            },
            {
                id: 8,
                image: hyderabadimg,
                title: 'Nehru Zoological Park',
                description: `Nehru Zoological Park is a sprawling zoo in Hyderabad, home to a variety of animals and birds. 
                It offers safari rides, a lake for boating, and is a popular destination for families and nature lovers.`
            },
            {
                id: 9,
                image: hyderabadimg,
                title: 'Lumbini Park',
                description: `Lumbini Park is a beautiful urban park located near Hussain Sagar Lake. It is known for its musical fountain shows, 
                lush greenery, and boat rides, making it a popular spot for relaxation and entertainment.`
            }
        ],

        [
            {
                id: 0,
                image: ahmedabadimg,
                title: 'Sabarmati Ashram',
                description: `Sabarmati Ashram, founded by Mahatma Gandhi, is a historic site that played a crucial role in India's 
                freedom struggle. It offers insights into Gandhi's life and philosophy, surrounded by serene gardens and museum exhibits.`
            },
            {
                id: 1,
                image: ahmedabadimg,
                title: 'Sardar Patel Stadium',
                description: `Sardar Patel Stadium, also known as the Motera Stadium, is the largest cricket stadium in the world. 
                It hosts international matches and is a significant venue for sports enthusiasts.`
            },
            {
                id: 2,
                image: ahmedabadimg,
                title: 'Jama Masjid',
                description: `Jama Masjid is one of the largest mosques in India, known for its stunning Indo-Islamic architecture. 
                Built in the 15th century, it features beautiful courtyards and intricate carvings, attracting both worshippers and tourists.`
            },
            {
                id: 3,
                image: ahmedabadimg,
                title: 'Adalaj Stepwell',
                description: `The Adalaj Stepwell is an architectural marvel and an ancient water reservoir. Known for its intricate carvings 
                and beautiful design, it provides a glimpse into the rich heritage of Gujarat.`
            },
            {
                id: 4,
                image: ahmedabadimg,
                title: 'Akshardham Temple',
                description: `Akshardham Temple is a magnificent cultural complex showcasing intricate architecture, spiritual exhibitions, 
                and beautifully landscaped gardens. It’s a popular destination for visitors of all ages.`
            },
            {
                id: 5,
                image: ahmedabadimg,
                title: 'Kankaria Lake',
                description: `Kankaria Lake is a popular recreational spot in Ahmedabad, featuring a beautiful lakefront, amusement park, 
                and walking paths. It’s an ideal place for picnics and family outings.`
            },
            {
                id: 6,
                image: ahmedabadimg,
                title: 'Shreyas Folk Museum',
                description: `Shreyas Folk Museum showcases the rich cultural heritage of Gujarat through various artifacts, textiles, 
                and folk art. It’s a great place to learn about traditional crafts and local history.`
            },
            {
                id: 7,
                image: ahmedabadimg,
                title: 'Bhadra Fort',
                description: `Bhadra Fort is a historic fort built in the 14th century, offering panoramic views of the city. 
                It features beautiful gates, gardens, and a temple, making it a significant landmark in Ahmedabad.`
            },
            {
                id: 8,
                image: ahmedabadimg,
                title: 'Narmada Canal',
                description: `The Narmada Canal is a picturesque waterway offering boating and leisure activities. 
                The serene surroundings make it a perfect spot for relaxation and scenic views.`
            },
            {
                id: 9,
                image: ahmedabadimg,
                title: 'Sidi Saiyyed Mosque',
                description: `Sidi Saiyyed Mosque is famous for its stunning latticework windows, known as jaalis. 
                This 16th-century mosque is a fine example of Indo-Islamic architecture and a significant historical site in Ahmedabad.`
            }
        ],

        [
            {
                id: 0,
                image: puneimg,
                title: 'Aga Khan Palace',
                description: `Aga Khan Palace is a beautiful historical monument that played a significant role in India's freedom movement. 
                Its lush gardens and elegant architecture make it a popular tourist attraction.`
            },
            {
                id: 1,
                image: puneimg,
                title: 'Shaniwar Wada',
                description: `Shaniwar Wada is a magnificent fortification that served as the seat of the Peshwas of the Maratha Empire. 
                Its historical significance and stunning architecture attract many visitors.`
            },
            {
                id: 2,
                image: puneimg,
                title: 'Sinhagad Fort',
                description: `Sinhagad Fort is a hill fortress that offers breathtaking views of the Sahyadri mountains. 
                It's a popular trekking destination and holds great historical importance.`
            },
            {
                id: 3,
                image: puneimg,
                title: 'Osho Ashram',
                description: `Osho Ashram, also known as the Osho International Meditation Resort, is a serene place for meditation and spiritual growth. 
                Its tranquil gardens and various meditation programs attract visitors from around the world.`
            },
            {
                id: 4,
                image: puneimg,
                title: 'Pune Okayama Friendship Garden',
                description: `Inspired by the Okayama Korakuen Garden in Japan, this beautifully landscaped garden is a peaceful retreat in the city. 
                It features serene water bodies, walking paths, and a variety of plants and flowers.`
            },
            {
                id: 5,
                image: puneimg,
                title: 'Raja Dinkar Kelkar Museum',
                description: `The Raja Dinkar Kelkar Museum showcases a vast collection of artifacts, showcasing the rich cultural heritage of Maharashtra. 
                Its unique exhibits and intricate crafts make it a must-visit for art lovers.`
            },
            {
                id: 6,
                image: puneimg,
                title: 'Parvati Hill',
                description: `Parvati Hill offers a panoramic view of Pune city and is home to several ancient temples. 
                The hill is a popular spot for morning treks and leisurely strolls amidst nature.`
            },
            {
                id: 7,
                image: puneimg,
                title: 'Katraj Snake Park',
                description: `Katraj Snake Park is a unique wildlife park dedicated to the conservation of snakes and other reptiles. 
                It’s an educational destination for families and wildlife enthusiasts.`
            },
            {
                id: 8,
                image: puneimg,
                title: 'Fergusson College',
                description: `Fergusson College is an iconic educational institution known for its beautiful campus and rich history. 
                It’s a landmark in Pune, attracting visitors interested in architecture and education.`
            },
            {
                id: 9,
                image: puneimg,
                title: 'Mulshi Lake',
                description: `Mulshi Lake, located near Pune, is a scenic spot known for its picturesque landscapes and tranquil environment. 
                It’s a popular destination for picnics, boating, and photography.`
            }
        ]

    ];

    function Kolkata() {
        return (
            <div className="display-box">
                {Obj[0].map((v) => (
                    <div key={v.id} className='place-card'>
                        <img src={v.image} alt={v.title} />
                        <h4>{v.title}</h4>
                        <p>{v.description}</p>
                    </div>
                ))}
            </div>
        );
    }


    function Chennai() {
        return (
            <div className="display-box">
                {Obj[1].map((v) => (
                    <div key={v.id} className='place-card'>
                        <img src={v.image} alt={v.title} />
                        <h4>{v.title}</h4>
                        <p>{v.description}</p>
                    </div>
                ))}
            </div>
        )
    }

    function Bangalore() {
        return (
            <div className="display-box">
                {Obj[2].map((v) => (
                    <div key={v.id} className='place-card'>
                        <img src={v.image} alt={v.title} />
                        <h4>{v.title}</h4>
                        <p>{v.description}</p>
                    </div>
                ))}
            </div>
        )
    }

    function Delhi() {
        return (
            <div className="display-box">
                {Obj[3].map((v) => (
                    <div key={v.id} className='place-card'>
                        <img src={v.image} alt={v.title} />
                        <h4>{v.title}</h4>
                        <p>{v.description}</p>
                    </div>
                ))}
            </div>
        )
    }

    function Mumbai() {
        return (
            <div className="display-box">
                {Obj[4].map((v) => (
                    <div key={v.id} className='place-card'>
                        <img src={v.image} alt={v.title} />
                        <h4>{v.title}</h4>
                        <p>{v.description}</p>
                    </div>
                ))}
            </div>
        )
    }

    function Hyderabad() {
        return (
            <div className="display-box">
                {Obj[5].map((v) => (
                    <div key={v.id} className='place-card'>
                        <img src={v.image} alt={v.title} />
                        <h4>{v.title}</h4>
                        <p>{v.description}</p>
                    </div>
                ))}
            </div>
        )
    }

    function Ahmedabad() {
        return (
            <div className="display-box">
                {Obj[6].map((v) => (
                    <div key={v.id} className='place-card'>
                        <img src={v.image} alt={v.title} />
                        <h4>{v.title}</h4>
                        <p>{v.description}</p>
                    </div>
                ))}
            </div>
        )
    }

    function Pune() {
        return (
            <div className="display-box">
                {Obj[7].map((v) => (
                    <div key={v.id} className='place-card'>
                        <img src={v.image} alt={v.title} />
                        <h4>{v.title}</h4>
                        <p>{v.description}</p>
                    </div>
                ))}
            </div>
        )
    }

    function Display() {
        switch (val) {
            case 0:
                return <Kolkata />
            case 1:
                return <Chennai />
            case 2:
                return <Bangalore />
            case 3:
                return <Delhi />
            case 4:
                return <Mumbai />
            case 5:
                return <Hyderabad />
            case 6:
                return <Ahmedabad />
            case 7:
                return <Pune />
            default:
                return null;
        }
    }


    return (
        <div>
            <div className="city-nav">
                {city.map((v, index) => (
                    <div
                        key={index}
                        className={`city-nav-item ${val === index ? 'active' : ''}`}
                        onClick={() => handelClick(index)}
                    >
                        <h4>{v}</h4>
                    </div>
                ))}
            </div>

            <div className='destination-box'>
                <h4><i class="fa-solid fa-angle-down"></i>  Iconic places to explore in <span>{city[val]}</span></h4>
            </div>

            <Display />
        </div>
    )
}

export default Destination;
