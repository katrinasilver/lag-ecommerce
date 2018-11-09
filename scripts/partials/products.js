//Footer template
const footerTemplate = () => {
    return `
<div class='container page-footer col-md-12 bg-dark text-white pt-5'>

<div class='row col-md-12'>
    <div class='col-md-12 col-lg-3'>
        <h3>Visit us! No cops.</h3>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="190" id="gmap_canvas" src="https://maps.google.com/maps?q=flying%20pie%20pizzeria&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.crocothemes.net"></a></div><style>.mapouter{text-align:right;height:190px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:190px;width:300px;}</style></div><br/>
        Conveniently hidden under Flying Pie Pizzeria
    </div>
    <div class='col-md-12 col-lg-3'>
        <h3>Coming soon...</h3>

            <img src="./assets/vegasaurus.png" alt="DinoPark's Vegasaurus" class='img-responsive border border-white rounded' style="width: 25%">
            Brand new dino: Vegasaurus
            <img src="./assets/mastodon.jpg" alt="DinoPark's Vegasaurus" class='img-responsive border border-white rounded' style="width: 25%">
            Mastodon Tasting<br>
            <img src="./assets/larryking.jpeg" alt="DinoPark's Vegasaurus" class='img-responsive border border-white rounded' style="width: 25%">
            Larry King haha burn lol
    </div>
    <div class='col-md-12 col-lg-3'>
        <h3>Services & Accessories</h3>
        <ul class='list-unstyled'>
            <li>Checkups</li>
            <li>Dinosurgery (unlicensed!)</li>
            <li>Dinocloning</li>
            <li>Dinoforking</li>
            <li>Human Cloning</li>
            <li>Cute Dinocostumes</li>
            <li>Dinohorseshoes</li>
        </ul>
    </div>
    <div class='col-md-12 col-lg-3'>
        <h3>Visit our partners</h3>
        <ul class='list-unstyled'>
            <li>PandaMonium Koala Emporium</li>
            <li>Toys R Us</li>
            <li>Megala Don's Whalery & General</li>
            <li>Flex Seal</li>
            <li>Jeff Goldblum</li>
            <li>Le Bon Marche</li>
            <li>JJ Abrams</li>
        </ul>
    </div>
</div>
<div class="footer-copyright text-center py-3">© 2018 Copyright: DinoStore LLC, a division of LAG Corp</div>
</div>
    `
}

if (window.location.href.indexOf('products') > -1) {

    //Array of dinos
    const allProducts = [
        {
            name: 'Tyrannosaurus Rex',
            caption: `We're bringin' Rexy back.`,
            description: `I mean, do we even need to say anything? Nope. Anyhow, invented by visionary director Steven Spielberg, let's just say you're "gonna need a bigger boat!" for this one. With 455 gallimimuses under the hood, T-Rex is capable of over 200 megachomps per second. If ever your adventures go awry, you can count on it to suddenly be there and eat the offending things or people in unbelievably convenient fashion. Plus, I saw you lookin at that Troodon over there...between us? Way more bang for your buck here, believe me.`,
            pic: `./assets/c-tyrranosaurus-rex.jpg`,
            price: 3200,
            diet: 'Carnivore'
        },
        {
            name: 'Brachiosaurus',
            caption: `"Nature's giraffe"`,
            description: `So just to get out in front of it, very tall. 4 stories. I know what you’re thinking, I thought it would’ve been more than that too. But still, make sure you have really tall trees for it to eat, and like a lot of them too. They can reach down to the ground but it’s not good for their necks, we really recommend an elevated diet. I know you probably know all this stuff, it’s just, we get a lot of returns on these poor things, you know, or people flush em when they can’t take care of them and they live in the sewers and it’s just a whole thing. Very friendly and affectionate!`,
            pic: `./assets/h-brachiosaurus.jpg`,
            price: 3000,
            diet: 'Herbivore'
        },
        {
            name: 'Triceratops',
            caption: `Triceratops in the streets, triceratops in the sheets.`,
            description: `Oldie but a goodie. Yes, you’ve been hearing about Triceratops forever. But there’s a reason--after all these years, it’s still producing. Standing up to T-Rexes when everyone else is afraid to, poking holes in fools, shielding its head with a sweet armor plate thing. Having a beak. Etc. You should hope to look so good at its age!`,
            pic: `./assets/h-triceratops.jpg`,
            price: 1800,
            diet: 'Herbivore'
        },
        {
            name: 'Giganotosaurus',
            caption: 'T-Rex performance at Allosaurus prices.',
            description: `You wouldn\'t pay for name-brand prescription medications; why pay for a name-brand theropod apex predator? There are some people who feel they need the gusto of showing up to work in a genuine Tyrannosaurus, but not you. You\'re an educated consumer. You know the greatest luxury of all is carrying yourself with the quiet confidence that you're actually superior to that guy, because you got a slick Dino Deal.`,
            pic: `./assets/c-giganotosaurus-carolinii.jpg`,
            price: 1400,
            diet: 'Carnivore'
        },
        {
            name: 'Diplodocus',
            caption: `You can't spell Sdiplodocust without Diplodocus.`,
            description: `Diplodocus doesn’t get a lot of fanfare but it’s really a solid mid-shelf choice. It’s actually made in the same factory as Brachiosaurus I think, sort of their bargain label. But the most expensive one is never the best value really, this is the range you wanna be in for like an "every-day sauropod."`,
            pic: `./assets/h-diplodocus.jpg`,
            price: 2200,
            diet: 'Herbivore'
        },
        {
            name: 'Troodon',
            caption: `"I'm a Troodon!"`,
            description: `One word...Troodon. Boom.`,
            pic: `./assets/o-troodon.jpg`,
            price: 4500,
            diet: 'Omnivore'
        },
        {
            name: 'Spinosaurus',
            caption: `Spinning is a good trick!`,
            description: `So it’s Spinasaurus, like “spine,” they don’t spin. I mean they might. I don’t know. That’s really what you’re looking for? Cause you’re paying a premium for the spine thing with this sucker, that’s kind of the hook. Let me look in the back and see if we have anything that might be more spinny. No yeah, it’s confusing, you’re right. You gotta hear it out loud. OK be right back.`,
            pic: `./assets/c-spinosaurus-aegyptiacus.jpg`,
            price: 2000,
            diet: 'Carnivore'
        },
        {
            name: 'Chirostenotes',
            caption: `Dinosaurs of a feather evolve together. Into birds.`,
            description: `Scientists have long believed some dinosaurs might have had feathers. Such as, let's say, this guy. Why not? We threw some on there! Let's not kid ourselves, these are all like 90% frog DNA, the HMS Accuracy has sailed. You might know Chirostenotes better as the 'chicken of the sea,' though it's admittedly highly unlikely.`,
            pic: `./assets/o-chirostenotes.jpg`,
            price: 900,
            diet: 'Omnivore'
        },
        {
            name: 'Deinocheirus',
            caption: 'Just terrible.',
            description: `Alright, no sugar-coating this one. This is not the best dinosaur out there. Probably not top 100. Among God’s greatest mistakes, to be sure. And probably still not in your price range if you’re scraping all the way down here, am I right? But hey, if you’re not serious about dinosaur ownership--oh yeah, you are? Hey Louie, this guy look serious about dinosaur ownership? [LOUIE]: No boss he don’t look so serious to me. [WEBSITE]: Oh look at that, Louie doesn’t think you look serious. Louie's a smart guy. You are, though? OK OK, let's say you’re serious. Well you’re gonna wanna get in the market RIGHT NOW my friend, any way you can, before you get left behind in a sea of flames that used to be your home. And Bryce Dallas-Howard ain't gonna save ya.`,
            pic: `./assets/o-deinocheirus.jpg`,
            price: 17,
            diet: 'Omnivore'
        }

    ]

    //add dinosaurs

    function addDinoProduct(dino) {

        let newDino = document.createElement('DIV')
        newDino.classList = 'dinoCard row col-md-12'

        newDino.innerHTML = `<div class = 'col-md-4'>
        <div class='card'>
        <img class='card-img-top' src='${dino.pic}'>
        <div class='card-body'>

        <p class='font-italic'>${dino.caption}</p>
        </div>
        </div> <!--card-->
        </div> <!--card div-->
        <div class='card col-md-6 p-3'>
        <h3>${dino.name}</h3>
        <p>${dino.description}</p>
        <span class='font-italic'>Diet: ${dino.diet}</span>
        <div>
        <h5 class='font-weight-bold'>$${dino.price}</h5>
        <a href='#' class="product btn btn-primary"><i class="text-white-50 fa fa-plus"></i> Add to Cart</a>
        </div>
        </div>`

        document.getElementById('product-field').append(newDino)

    }

    function renderProducts(products) {
        for (dino of products) {
            addDinoProduct(dino)
        }
    }
    function renderHerbivores(products) {
        for (dino of products) {
            if (dino.diet === 'Herbivore') {
                addDinoProduct(dino)
            }
        }
    }
    function renderCarnivores(products) {
        for (dino of products) {
            if (dino.diet === 'Carnivore') {
                addDinoProduct(dino)
            }
        }
    }
    function renderOmnivores(products) {
        for (dino of products) {
            if (dino.diet === 'Omnivore') {
                addDinoProduct(dino)
            }
        }
    }
    function renderLow(products) {
        let temp = products.slice(0)
        while (temp.length > 0) {
            let lowest = temp[0]
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].price < lowest.price) {
                    lowest = temp[i];
                }
            }
            let j = temp.indexOf(lowest)
            temp.splice(j, 1)
            addDinoProduct(lowest)
        }
    }
    function renderHigh(products) {
        let temp = products.slice(0)
        while (temp.length > 0) {
            let highest = temp[0]
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].price > highest.price) {
                    highest = temp[i];
                }
            }
            let j = temp.indexOf(highest)
            temp.splice(j, 1)
            addDinoProduct(highest)
        }
    }

    document.addEventListener('DOMContentLoaded', function () {

        let productField = document.getElementById('product-field')
        renderProducts(allProducts)

        let plantEatersSort = document.getElementById('plant-eaters')
        plantEatersSort.addEventListener('click', function () {
            productField.innerHTML = ''
            renderHerbivores(allProducts)
        })
        let meatEatersSort = document.getElementById('meat-eaters')
        meatEatersSort.addEventListener('click', function () {
            productField.innerHTML = ''
            renderCarnivores(allProducts)
        })
        let omniSort = document.getElementById('omnivore-eaters')
        omniSort.addEventListener('click', function () {
            productField.innerHTML = ''
            renderOmnivores(allProducts)
        })
        let anySort = document.getElementById('any-diet-sort')
        anySort.addEventListener('click', function () {
            productField.innerHTML = ''
            renderProducts(allProducts)
        })
        let lowSort = document.getElementById('low-sort')
        lowSort.addEventListener('click', function () {
            productField.innerHTML = ''
            renderLow(allProducts)
        })
        let highSort = document.getElementById('high-sort')
        highSort.addEventListener('click', function () {
            productField.innerHTML = ''
            renderHigh(allProducts)
        })
        let popSort = document.getElementById('popular-sort')
        popSort.addEventListener('click', function () {
            productField.innerHTML = ''
            renderProducts(allProducts)
        })
    })
}

module.exports = {
    footerTemplate
}
