--- 
layout: post
title: 'Rcov with segfault bug patched'
categories: 
  []
tags:
  - ruby
  - tdd
  - bdd
---


Rcov are hurting many people because of a [segfault when used with rspec][bug]. Fortunately [Tom Copeland][tom] wrote a [patch last week][patch]. I patched it against rcov and put on [GitHub][gh]. You can install it as a gem doing like this:

    $ gem sources -a http://gems.github.com (you only have to do this once)
    $ sudo gem install mergulhao-rcov

Someone knows how to make GitHub recognizes my README.markdown file?

[patch]: http://tomcopeland.blogs.com/juniordeveloper/2008/08/rcov-crashing-w.html
[gh]: http://github.com/mergulhao/rcov/tree/master
[tom]: http://tomcopeland.blogs.com/
[bug]: http://rspec.lighthouseapp.com/projects/5645/tickets/309-fix-for-rcov-segfault-2


