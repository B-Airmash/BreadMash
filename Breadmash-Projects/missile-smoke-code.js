    var Yt = {};
        Math.PI,
        Particles.setup = function() {
            Yt.smoke = new Xt(game.graphics.layers.smoke,2e4),
            Yt.shadows = new Xt(game.graphics.layers.shadows,2e4,null,!0),
            Yt.explosions = new Xt(game.graphics.layers.explosions,2e4)
        }
        ,
        Particles.update = function() {
            for (var jt = .51 < game.timeFactor ? Math.round(game.timeFactor) : 1, Wt = game.timeFactor / jt, zt = 0; zt < jt; zt++)
                Yt.smoke.update(Wt),
                Yt.explosions.update(Wt),
                Yt.shadows.update(Wt)
        }
        ,
        Particles.wipe = function() {
            Yt.smoke.wipe(),
            Yt.explosions.wipe(),
            Yt.shadows.wipe()
        }
        ,
        Particles.planeDamage = function(jt) {
            var Wt = 2 == jt.type ? 2 : 1
              , zt = Tools.randInt(1, 4)
              , Vt = Tools.randCircle()
              , qt = Tools.rand(.5, 2)
              , Kt = Tools.rand(.2, .8)
              , Zt = Tools.rand(0, .3)
              , Qt = Vector.createOff(jt.pos, Vt, Tools.rand(0, 5 * Wt))
              , Jt = Vector.create(Vt, qt);
            Yt.explosions.addParticle(Ht.PLANE_DAMAGE, "spark_" + zt, new Vector(Jt.x + jt.speed.x,Jt.y + jt.speed.y), Qt, Vector.diag(Kt), 0, 0, Tools.randCircle(), 16739073, null, PIXI.BLEND_MODES.ADD, Zt)
        }
        ,
        Particles.explosion = function(jt, Wt, zt) {
            for (var Vt = 1 < Wt ? 1 + (Wt - 1) / 1.5 : Wt, qt = 0; 2 > qt; qt++)
                Yt.explosions.addParticle(Ht.EXPLOSION_FLASH, "flash_" + Tools.randInt(1, 4), Vector.zero(), jt.clone(), Vector.diag(1.5 * Wt), 0, 0, Tools.randCircle(), 15987628, null, PIXI.BLEND_MODES.ADD);
            var Kt, Zt, Qt, Jt, $t, en, tn, nn, an;
            for (Kt = Math.round(Tools.rand(20, 30) * Wt),
            qt = 0; qt < Kt; qt++)
                Zt = Tools.randInt(1, 4),
                Qt = Tools.randCircle(),
                $t = Tools.rand(3, 10) * Vt,
                en = Tools.rand(-.2, .2),
                tn = Tools.rand(.4, 1.5) * Vt,
                an = Tools.rand(0, .3),
                Yt.explosions.addParticle(Ht.EXPLOSION_SPARK, "spark_" + Zt, Vector.create(Qt, $t), jt.clone(), Vector.diag(tn), 0, en, Tools.randCircle(), 16739073, null, PIXI.BLEND_MODES.ADD, an);
            for (qt = 0; qt < zt; qt++)
                Qt = Tools.randCircle(),
                $t = Tools.rand(3, 7) * Vt,
                Jt = Tools.rand(15, 30) * Wt,
                Yt.explosions.addEmitter(Ht.EMITTER_EXPLOSION_FRAGMENT, Vector.create(Qt, $t), Vector.createOff(jt, Qt, Jt), Tools.rand(0, .5), Yt.shadows);
            for (Kt = Math.round(Tools.rand(20, 30) * Wt),
            qt = 0; qt < Kt; qt++)
                Zt = Tools.randInt(1, 16),
                Qt = Tools.randCircle(),
                Jt = Tools.rand(0, 10) * Wt,
                $t = Tools.rand(0, 3) * Wt,
                en = Tools.rand(-.1, .1),
                tn = Tools.rand(.5, .8) * Wt,
                nn = Tools.randCircle(),
                config.disableSmoke || Yt.explosions.addParticle(Ht.EXPLOSION_SMOKE, "smoke_" + Zt, Vector.create(Qt, $t), Vector.createOff(jt, Qt, Jt), Vector.diag(tn), 0, en, nn),
                config.disableSmoke || Yt.shadows.addParticle(Ht.EXPLOSION_SMOKE, "smokeshadow_" + Zt, Vector.create(Qt, $t), Vector.createOff(jt, Qt, Jt), Vector.diag(tn), 0, en, nn);
            for (Yt.explosions.addParticle(Ht.EXPLOSION_FLASH_BIG, "glowsmall", Vector.zero(), jt.clone(), Vector.diag(6 * Wt), 0, 0, 0, null, null, PIXI.BLEND_MODES.ADD),
            Kt = Math.round(Tools.rand(5, 10) * Wt),
            qt = 0; qt < Kt; qt++)
                Zt = Tools.randInt(1, 4),
                Qt = Tools.randCircle(),
                $t = Tools.rand(1, 3) * Wt,
                en = Tools.rand(-.1, .1),
                tn = Tools.rand(.1, .3) * Wt,
                Yt.explosions.addParticle(Ht.EXPLOSION_HOT_SMOKE, "hotsmoke_" + Zt, Vector.create(Qt, $t), jt.clone(), Vector.diag(tn), 0, en, Tools.randCircle(), 16739073, null, PIXI.BLEND_MODES.ADD)
        }
        ,
        Particles.missileSmoke = function(jt, Wt, zt) {
            var Vt = [null, Ht.MISSILE, Ht.MISSILE_FAT, Ht.MISSILE_SMALL, null, Ht.MISSILE, Ht.MISSILE, Ht.MISSILE][jt.type]
              , qt = jt.spriteRot + Math.PI
              , Kt = Vector.createOff(jt.pos, qt, Wt)
              , Zt = .2 * (zt = zt || 1)
              , Qt = Tools.rand(-.1, .1)
              , Jt = Vector.create(qt + Qt, 5 * zt)
              , $t = Tools.randInt(1, 16)
              , en = Tools.rand(-.1, .1);
            Tools.randCircle(),
            Yt.smoke.addParticle(Vt, "smoke_" + $t, Jt.clone(), Kt.clone(), new Vector(1.25 * Zt,4 * Zt), 1, en, qt, 16775590, null, null, null, zt),
            Yt.shadows.addParticle(Vt, "smokeshadow_" + $t, Jt.clone(), Kt.clone(), new Vector(1.25 * Zt,4 * Zt), 1, en, qt, null, null, null, null, zt)
