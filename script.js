
const API_URL = "https://jsonplaceholder.typicode.com/posts";

const articles = [
    {
        title: "The Slow Burn of Becoming Yourself",
        source: "Substack",
        author: "hasif",
        description:
            "On growing into someone you never saw coming, embracing change, and learning that becoming yourself takes time.",
        url: "https://hasifff.substack.com/p/the-slow-burn-of-becoming-yourself"
    },

    {
        title: "Bawal Mangarap Nang Malayo Kapag Sakto Lang ang Pamasahe Pabalik",
        source: "Substack",
        author: "ænri",
        description:
            "Kung may sapat lang sana tayong oras at pera para piliin ang gusto natin, nasaan kaya tayo ngayon?",
        url: "https://anrkivethoughts.substack.com/p/bawal-mangarap-nang-malayo-kapag-c2e"
    },

    {
        title: "Maybe It's Time to Meet Yourself Again",
        source: "Medium",
        author: "Twash",
        description:
            "A personal reflection on growth, changing priorities, and learning to appreciate who you are becoming.",
        url: "https://medium.com/@twash1292/maybe-its-time-to-meet-yourself-again-6d6f55ade91a"
    },

    {
        title: "What a Few Minutes of Honest Reflection Revealed About My Life",
        source: "Medium",
        author: "Lubnaaly",
        description:
            "A reflection on asking whether the life you're living truly makes you happy, instead of constantly searching for things to fix.",
        url: "https://medium.com/the-gravity/what-a-few-minutes-of-honest-reflection-revealed-about-my-life-c724819b4120"
    },

    {
        title: "I'm Learning to Be Enough Without Becoming Someone Else",
        source: "Medium",
        author: "Dinesh Shastri",
        description:
            "On self-acceptance, the exhaustion of seeking approval, and the quiet courage of being yourself.",
        url: "https://dgshastri.medium.com/im-learning-to-be-enough-without-becoming-someone-else-d5e6ca7c8cdd"
    },
];

const loadButton = document.querySelector("#loadButton");
const retryButton = document.querySelector("#retryButton");
const statusText = document.querySelector("#status");
const postsContainer = document.querySelector("#posts");
const postCount = document.querySelector("#postCount");

loadButton.addEventListener("click", loadPosts);
retryButton.addEventListener("click", loadPosts);

async function loadPosts() {
    setLoadingState();

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error("Unexpected API response.");
        }

        const firstFive = articles.slice(0, 5);

        renderPosts(firstFive);

        statusText.textContent =
            "Here are five stories selected for you.";

        postCount.textContent =
            `${firstFive.length} stories in the collection`;

        retryButton.hidden = true;

    } catch (error) {
        console.error("Unable to load posts:", error);
        showError(error);

    } finally {
        loadButton.disabled = false;
        loadButton.textContent = "Load posts";
    }
}

function setLoadingState() {
    loadButton.disabled = true;
    loadButton.textContent = "Loading...";

    retryButton.hidden = true;
    statusText.textContent = "Preparing your reading collection...";
    postCount.textContent = "Loading...";

    postsContainer.replaceChildren();

    const box = document.createElement("div");
    box.className = "loading-state";

    const spinner = document.createElement("div");
    spinner.className = "spinner";
    spinner.setAttribute("aria-hidden", "true");

    const heading = document.createElement("h2");
    heading.textContent = "A little moment...";

    const message = document.createElement("p");
    message.textContent = "Getting your stories ready.";

    box.append(spinner, heading, message);
    postsContainer.append(box);
}

function renderPosts(posts) {
    postsContainer.replaceChildren();

    posts.forEach((article) => {
        const card = document.createElement("a");
        card.className = "post-card";
        card.href = article.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.setAttribute(
            "aria-label",
            `Read ${article.title} on ${article.source}`
        );

        const source = document.createElement("p");
        source.className = "post-source";
        source.textContent = article.source;

        const title = document.createElement("h2");
        title.textContent = article.title;

        const description = document.createElement("p");
        description.className = "post-description";
        description.textContent = article.description;

        const footer = document.createElement("div");
        footer.className = "post-footer";

        const author = document.createElement("span");
        author.className = "post-author";
        author.textContent = `By ${article.author}`;

        const readLink = document.createElement("span");
        readLink.className = "read-link";
        readLink.textContent = "Read full article";

        footer.append(author, readLink);
        card.append(source, title, description, footer);
        postsContainer.append(card);
    });
}

function showError(error) {
    statusText.textContent =
        "We couldn't load your reading collection.";

    postCount.textContent = "Unable to load";

    postsContainer.replaceChildren();

    const box = document.createElement("div");
    box.className = "error-state";

    const heading = document.createElement("h2");
    heading.textContent = "Looks like we hit a little pause.";

    const message = document.createElement("p");
    message.textContent =
        "Please check your internet connection and try again. " +
        (error instanceof Error ? error.message : "");

    box.append(heading, message);
    postsContainer.append(box);

    retryButton.hidden = false;
}