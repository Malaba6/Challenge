class User {
    constructor(name) {
        this._name = name;
        this._loggedIn = false;
        this._lastLoggedInAt = null;
    }

    isLoggedIn() {
        return this._loggedIn;
    }

    getLastLoggedInAt() {
        return this._lastLoggedInAt;
    }

    logIn() {
        this._lastLoggedInAt = new Date();
        this._loggedIn = true;
    }

    logOut() {
        this._loggedIn = false;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    canEdit(Comment) {
        if (Comment._author._name === this._name) {
            return true;
        }
        return false;
    }

    canDelete(Comment) {
        return false;
    }
}

class Moderator extends User {
    constructor(name) {
        super(name);
    }
    canDelete(Comment) {
        return true;
    }
}

class Admin extends Moderator {
    constructor(name) {
        super(name);
    }
    canEdit(Comment) {
        return true;
    }
}

class Comment {
    constructor(author = null, message, repliedTo = null) {
        this._createdAt = new Date();
        this._message = message;
        this._repliedTo = repliedTo;
        this._author = author;
    }
    getCreatedAt() {
        return this._createdAt;
    }
    getMessage() {
        return this._message;
    }
    setMessage(message) {
        this._message = message;
    }
    getRepliedTo() {
        return this._repliedTo;
    }
    getAuthor() {
        return this._author;
    }
    toString() {
        if (this._repliedTo === null) {
            return `${this._message} by ${this._author._name}`;
        }
        return `${this._message} by ${this._author._name} (replied to ${this._repliedTo._author._name})`;
    }
}

eric = new User("eric");
eubule = new User("eubule");
comment = new Comment(eric, "Hi there");
comment2 = new Comment(eric, "Hi there", comment);
moderator = new Moderator("malaba");
console.log(moderator.canDelete(comment));

console.log(eric.isLoggedIn());
eric.logIn();
console.log(eric.isLoggedIn());
console.log(eric.getName());
eric.setName("Malaba");
console.log(eric.getName());
console.log(eric.canEdit(comment));
console.log(comment2.toString());