//dynamically make a card class that has h1, p and h3 to display User's name, blog post and date
class Card {
    constructor(name, blog, date) {
        this.name = name;
        this.blog = blog;
        this.date = date;
    }
    render() {
        let card = document.createElement('div');
        card.className = 'card';
        let name = document.createElement('h1');
        name.className = 'name';
        name.innerText = this.name;
        let blog = document.createElement('p');
        blog.className = 'blog';
        blog.innerText = this.blog;
        let date = document.createElement('h3');
        date.className = 'date';
        date.innerText = this.date;
        card.appendChild(name);
        card.appendChild(blog);
        card.appendChild(date);
        return card;
    }
}

