<script lang="ts">
  type Reactions =
    | "like"
    | "love"
    | "dislike"
    | "haha"
    | "sad"
    | "angry"
    | "surprised";

  let likeCount = 0;
  let loveCount = 0;
  let dislikeCount = 0;
  let hahaCount = 0;
  let sadCount = 0;
  let angryCount = 0;
  let surprisedCount = 0;

  let usedReactions: Record<Reactions, boolean> = {
    like: false,
    love: false,
    dislike: false,
    haha: false,
    sad: false,
    angry: false,
    surprised: false,
  };

  function handleReaction(reaction: Reactions) {
    if (!usedReactions[reaction]) {
      switch (reaction) {
        case "like":
          likeCount++;
          break;
        case "love":
          loveCount++;
          break;
        case "dislike":
          dislikeCount++;
          break;
        case "haha":
          hahaCount++;
          break;
        case "sad":
          sadCount++;
          break;
        case "angry":
          angryCount++;
          break;
        case "surprised":
          surprisedCount++;
          break;
      }
      // Mark the reaction as used
      usedReactions[reaction] = true;
    }
  }
</script>

<div>
  <label for="love">
    <input
      type="radio"
      name="reaction"
      id="love"
      value="love"
      on:change={() => handleReaction("love")}
    />
    <img src="https://emojicdn.elk.sh/😍" width="24" height="24" alt="Love" />
    <span>Love</span>
  </label>
  <label for="like">
    <input
      type="radio"
      name="reaction"
      id="like"
      value="like"
      on:change={() => handleReaction("like")}
    />
    <img src="https://emojicdn.elk.sh/👍" width="24" height="24" alt="Like" />
    <span>Like</span>
  </label>
  <label for="dislike">
    <input
      type="radio"
      name="reaction"
      id="dislike"
      value="dislike"
      on:change={() => handleReaction("dislike")}
    />
    <img
      src="https://emojicdn.elk.sh/👎"
      width="24"
      height="24"
      alt="Dislike"
    />
    <span>Dislike</span>
  </label>
  <label for="haha">
    <input
      type="radio"
      name="reaction"
      id="haha"
      value="haha"
      on:change={() => handleReaction("haha")}
    />
    <img src="https://emojicdn.elk.sh/😂" width="24" height="24" alt="Haha" />
    <span>Haha</span>
  </label>
  <label for="sad">
    <input
      type="radio"
      name="reaction"
      id="sad"
      value="sad"
      on:change={() => handleReaction("sad")}
    />
    <img src="https://emojicdn.elk.sh/😢" width="24" height="24" alt="Sad" />
    <span>Sad</span>
  </label>
  <label for="angry">
    <input
      type="radio"
      name="reaction"
      id="angry"
      value="angry"
      on:change={() => handleReaction("angry")}
    />
    <img src="https://emojicdn.elk.sh/😡" width="24" height="24" alt="Angry" />
    <span>Angry</span>
  </label>
  <label for="surprised">
    <input
      type="radio"
      name="reaction"
      id="surprised"
      value="surprised"
      on:change={() => handleReaction("surprised")}
    />
    <img
      src="https://emojicdn.elk.sh/😲"
      width="24"
      height="24"
      alt="Surprised"
    />
    <span>Surprised</span>
  </label>
</div>

<style>
  div {
    position: absolute;
    top: 25px;
    left: -90px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 9999px;
    padding: 1rem;
    background-color: hsl(var(--gray-1-hsl) / 5%);
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
</style>
