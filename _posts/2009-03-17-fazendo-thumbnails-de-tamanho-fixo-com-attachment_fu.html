--- 
layout: post
title: 'Fazendo thumbnails de tamanho fixo com attachment_fu'
disqus_id: /2009/3/17/fazendo-thumbnails-de-tamanho-fixo-com-attachment_fu
categories: 
  []
tags:
  - rails
  - plugin
---


O plugin [attachment\_fu][1] é quase que o plugin padrão para tratar do upload de arquivos em aplicações Rails. Ele suporta também o resize de imagens mantendo as proporções, mas não suporta crop. Sempre precisamos criar avatar ou coisas semelhantes. E em geral o avatar tem um tamanho fixo, como 80x80. Para isso é necessário fazer o crop da imagem. Adicione o método _resize\_image_, como abaixo, no seu modelo:

    class Photo < ActiveRecord::Base
      belongs_to :owner, :class_name => "Person"
      has_attachment :content_type => :image,
        :processor => :rmagick,
        :storage => :file_system,
        :resize_to => '600>',
        :thumbnails => { 
          :album        => 'crop: 150x150',
          :icon         => '72>' }

      protected
      def resize_image(img, size)
        # resize_image take size in a number of formats, we just want
        # Strings in the form of "crop: WxH"
        reg = /^crop: (\d*)x(\d*)/i
        if (size.is_a?(String) && size =~ reg) ||
            (size.is_a?(Array) && size.first.is_a?(String) &&
              size.first =~ reg)
          img.crop_resized!($1.to_i, $2.to_i)
          # We need to save the resized image in the same way the
          # orignal does.
          self.temp_path = write_to_temp_file(img.to_blob)
        else
          super # Otherwise let attachment_fu handle it
        end
      end
    end

Assim você sobrescreve o método original do [attachment\_fu][1] para suportar uma sintaxe especial. Então quando você quiser um thumbnail ou até mesmo a imagem principal cortada de um tamanho específico, basta usar a string 'crop: WxH'. Bom lembrar que isso só irá funcionar com o Rmagick. Eu dei uma olhada sobre como fazer usando o image\_science, mas era um pouco mais chato. É bom setar: _:processor => :rmagick_ na definição do _has\_attachment_.

Eu também fiz um teste para garantir que os meus thumbnails estão sendo gerados no tamanho correto:

    describe "photo resize" do
      it "should create thumbnails with correct size" do
        photo = new_photo
        photo.save!

        full, album, icon = *Magick::ImageList.new(
          photo.full_filename,
          photo.full_filename('album'),
          photo.full_filename('icon')
        )

        full.columns.should == 50
        full.rows.should == 64

        album.columns.should == 150
        album.rows.should == 150

        icon.columns.should == 50
        icon.rows.should == 64
      end
    end

PS1: Sim, eu sou paranóico com testes e você também deveria ser!  
PS2: Essa dica foi adaptada [daqui][2].

[1]: http://github.com/technoweenie/attachment_fu/tree/master
[2]: http://stuff-things.net/2008/02/21/quick-and-dirty-cropping-images-with-attachment_fu/


