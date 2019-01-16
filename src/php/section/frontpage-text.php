<section id="" class="section-watch">
  <div class="text-container">
    <div class="text-section">
      <div class="title">
        <h1 class="section-headline"><?php echo $frontPageTextHeadline ?></h1>
      </div>
      <div id="about-webintern" class="text">
        <p>
            <?php echo $frontPageTextText ?>
        </p>
        <?php ?>
      <?php if(basename($_SERVER['PHP_SELF']) == 'index.php') : ?>
          <a href="/ba_project/build/about.php" class="inline-link" style="text-decoration: none;">
            <h1 class="link-text"><?php echo $frontPageTextHeadlineReadMore ?></h1>
            <svg width="31px" height="24px" viewBox="0 0 31 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-802.000000, -490.000000)" fill="#333333" fill-rule="nonzero" stroke="#333333" stroke-width="2">
                  <g transform="translate(221.000000, 248.000000)">
                    <g transform="translate(582.000000, 243.000000)">
                      <polygon points="26.2279221 10.5 17.3566017 1.62867966 18.0637085 0.92157288 28.1421356 11 18.0673882 21.0747475 17.3602814 20.3676407 26.2279221 11.5 0 11.5 0 10.5"></polygon>
                      <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 24.69 35.778" to="0 24.69 35.778" dur="2s" begin="team.mouseover" end="team.mouseout" repeatCount="indefinite"/>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        <?php endif; ?>
        
      </div>
    </div>  
  </div>
</section> 