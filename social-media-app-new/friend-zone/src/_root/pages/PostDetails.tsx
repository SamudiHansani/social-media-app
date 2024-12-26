import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";
import { useCreateComment, useGetPostById } from "@/lib/react-query/queries";
import { Separator } from "@/components/ui/separator";
import { Loader2, MessageSquareText, MoveLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { IComment } from "@/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CommentFormValidation } from "@/lib/validation";

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const form = useForm<z.infer<typeof CommentFormValidation>>({
    resolver: zodResolver(CommentFormValidation),
    defaultValues: {
      comment: "",
    },
  });

  const { data: post, isLoading } = useGetPostById(id);
  const { mutateAsync: createComment } = useCreateComment();

  const handleComment = async (
    values: z.infer<typeof CommentFormValidation>
  ) => {
    await createComment({
      ...values,
      postId: id || "",
    });

    form.reset({ comment: "" });
    return navigate(`/posts/${id}`);
  };

  return (
    <div className="post_details-container">
      <div className="hidden md:flex w-full">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="shad-button_ghost"
        >
          <MoveLeft width={24} height={24} />
          <p className="small-medium lg:base-medium">Back</p>
        </Button>
      </div>

      {isLoading || !post ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          <div className="flex flex-col gap-3 flex-1 max-w-5xl w-full small-medium lg:base-regular">
            <p style={{ color: post.titleColor }}>{post.title}</p>
            <p className="text-light-3 small-regular">{post.description}</p>
            <div className="flex flex-col gap-1 items-end justify-center">
              <p className="subtle-semibold lg:small-regular text-light-3">
                {post.commentsCount} comment
                {post.commentsCount === 1 ? "" : "s"}
              </p>
              <Separator className="max-w-5xl bg-light-4" />
            </div>
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="shad-button_ghost">
                  <MessageSquareText width={16} height={16} />
                  <p>Comment</p>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="flex flex-col gap-4 mt-4">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleComment)}
                    className="flex flex-col gap-4"
                  >
                    <FormField
                      control={form.control}
                      name="comment"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="shad-input"
                              placeholder="Add a comment..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex items-center justify-end">
                      <Button
                        type="submit"
                        className="shad-button_primary whitespace-nowrap"
                      >
                        Comment
                      </Button>
                    </div>
                  </form>
                </Form>
                <div className="flex flex-col gap-4">
                  {post.comments?.map((item: IComment) => (
                    <p
                      key={item.id}
                      className="small-regular text-light-3 px-5 py-2"
                    >
                      {item.comment}
                    </p>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;
