import { BASE_URL } from "@/constants";
import { INewPost } from "@/types";

export async function createPost(post:INewPost) {
  try {
    await fetch(`${BASE_URL}`, {
      method: "post",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export async function getRecentPosts() {
  try {
    const response = await fetch(`${BASE_URL}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error posts fetching", error);
  }
}

export async function getPostById(postId?: string) {
  try {
    const response = await fetch(`${BASE_URL}/${postId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error post fetching", error);
  }
}

export async function createComment(postId: string, comment: string) {
  try {
    const response = await fetch(`${BASE_URL}/${postId}/comments`, {
      method: "post",
      body: JSON.stringify({
        comment,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error adding comment", error);
  }
}