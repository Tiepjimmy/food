<template>
  <div class="clear" id="comment-list">
    <div class="comments-area" id="comments">
      <h4 class="comments-title">Comments (03)</h4>
      <div class="clearfix">
        <!-- comment list END -->
        <ul class="comment-list">
          <li class="comment">
            <div class="comment-body">
              <div class="comment-author vcard">
                <img
                  class="avatar photo"
                  src="../assets/images/testimonial/mini/pic1.jpg"
                  alt="/"
                />
                <cite class="fn">Monsur Rahman Lito</cite>
              </div>
              <p class="font-14 mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div class="reply">
                <a href="javascript:void(0);" class="comment-reply-link">
                  Reply</a
                >
              </div>
            </div>
            <ol class="children">
              <li class="comment odd parent">
                <div class="comment-body">
                  <div class="comment-author vcard">
                    <img
                      class="avatar photo"
                      src="../assets/images/testimonial/mini/pic2.jpg"
                      alt="/"
                    />
                    <cite class="fn">Jake Johnson</cite>
                  </div>
                  <p class="font-14 mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div class="reply">
                    <a href="javascript:void(0);" class="comment-reply-link">
                      Reply</a
                    >
                  </div>
                </div>
                <!-- list END -->
              </li>
            </ol>
            <!-- list END -->
          </li>
          <li class="comment">
            <div class="comment-body">
              <div class="comment-author vcard">
                <img
                  class="avatar photo"
                  src="../assets/images/testimonial/mini/pic3.jpg"
                  alt="/"
                />
                <cite class="fn">John Doe</cite>
              </div>
              <p class="font-14 mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div class="reply">
                <a href="javascript:void(0);" class="comment-reply-link">
                  Reply</a
                >
              </div>
            </div>
          </li>
        </ul>
        <!-- comment list END -->
        <!-- Form -->
        <div class="comment-respond style-1" id="respond">
          <h4 class="comment-reply-title" id="reply-title">
            Good Comments
            <small
              ><a
                style="display: none"
                href="javascript:void(0);"
                id="cancel-comment-reply-link"
                rel="nofollow"
                >Cancel reply</a
              ></small
            >
          </h4>
          <form class="comment-form" id="commentform" method="post">
            <p class="comment-form-author">
              <label for="author">Name <span class="required">*</span></label>
              <input
                type="text"
                name="dzName"
                placeholder="Author"
                id="author"
              />
            </p>
            <p class="comment-form-email">
              <label for="email">Email <span class="required">*</span></label>
              <input
                type="text"
                placeholder="Email"
                name="dzEmail"
                id="email"
              />
            </p>
            <p class="comment-form-comment">
              <label for="comment">Comment</label>
              <textarea
                rows="8"
                name="comment"
                placeholder="Type Comment Here"
                id="comment"
              ></textarea>
            </p>
            <p class="form-submit">
              <button
                type="button"
                class="btn btn-primary btn-hover-1"
                id="submit"
              >
                <span>Submit Now</span>
              </button>
            </p>
          </form>
        </div>
        <!-- Form -->
      </div>
    </div>
  </div>
</template>
