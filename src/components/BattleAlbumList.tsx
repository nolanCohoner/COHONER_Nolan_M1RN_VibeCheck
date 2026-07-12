import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity,
  Image, Animated, Dimensions, TextInput,
} from 'react-native';
import { Track } from '../utils/constants';

const { width: SW, height: SH } = Dimensions.get('window');

// ── Assets officiels ──────────────────────────────────────────────────────────
const A = {
  bg:      require('../assets/images/album/fightbackground.gif'),
  heart:   require('../assets/images/album/coeur.webp'),
  ralsei:  require('../assets/images/album/ralsei_idle.webp'),
  victory: require('../assets/images/album/ralsei_victory.webp'),
};

// ── Palette Deltarune exacte ──────────────────────────────────────────────────
const C = {
  BG:       '#000000',
  BOX:      '#00E500',   // vert combat
  BOX_DIM:  '#004400',
  WHITE:    '#FFFFFF',
  GRAY:     'rgba(255,255,255,0.55)',
  ACTIVE:   '#00E500',
  ROW_ON:   'rgba(0, 55, 0, 0.60)',
  ROW_OFF:  'transparent',
  MSG_BG:   'rgba(0,0,0,0.92)',
};

// ── Barre EQ animee ───────────────────────────────────────────────────────────
const EqBar: React.FC<{ delay: number }> = ({ delay }) => {
  const h = useRef(new Animated.Value(4)).current;
  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(h, { toValue: 14, duration: 220 + delay * 40, useNativeDriver: false }),
        Animated.timing(h, { toValue: 3,  duration: 220 + delay * 40, useNativeDriver: false }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, []);
  return <Animated.View style={[st.eqBar, { height: h }]} />;
};

// ── Typewriter ────────────────────────────────────────────────────────────────
const useTypewriter = (text: string, speed = 28) => {
  const [shown, setShown] = useState('');
  useEffect(() => {
    setShown('');
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(iv);
    }, speed);
    return () => clearInterval(iv);
  }, [text]);
  return shown;
};

// ── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  tracks: Track[];
  currentTrack: Track | null;
  isPlaying: boolean;
  onSelectTrack: (track: Track) => void;
}

// ── Composant principal ───────────────────────────────────────────────────────
export const BattleAlbumList: React.FC<Props> = ({
  tracks, currentTrack, isPlaying, onSelectTrack,
}) => {
  const [query, setQuery]     = useState('');
  const filtered = query.trim()
    ? tracks.filter(t => t.title.toLowerCase().includes(query.toLowerCase()))
    : tracks;

  // Pulse boite verte
  const boxPulse = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!isPlaying) { boxPulse.setValue(0); return; }
    const loop = Animated.loop(Animated.sequence([
      Animated.timing(boxPulse, { toValue: 1, duration: 550, useNativeDriver: false }),
      Animated.timing(boxPulse, { toValue: 0, duration: 550, useNativeDriver: false }),
    ]));
    loop.start();
    return () => loop.stop();
  }, [isPlaying]);

  // Ralsei flotte legerement
  const ralseiY = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const loop = Animated.loop(Animated.sequence([
      Animated.timing(ralseiY, { toValue: -5, duration: 900, useNativeDriver: true }),
      Animated.timing(ralseiY, { toValue: 0,  duration: 900, useNativeDriver: true }),
    ]));
    loop.start();
    return () => loop.stop();
  }, []);

  const borderColor = boxPulse.interpolate({
    inputRange: [0, 1],
    outputRange: [C.BOX, '#AAFFAA'],
  });

  const msg = useTypewriter(
    currentTrack
      ? (isPlaying ? `* ${currentTrack.title}` : `* ${currentTrack.title} (en pause)`)
      : '* Choisissez une piste !',
  );

  // Coeur: leger rebond au tap
  const heartBounce = useRef<{ [id: string]: Animated.Value }>({}).current;
  const getHeartScale = (id: string) => {
    if (!heartBounce[id]) heartBounce[id] = new Animated.Value(1);
    return heartBounce[id];
  };
  const bounceHeart = (id: string) => {
    const s = getHeartScale(id);
    Animated.sequence([
      Animated.timing(s, { toValue: 1.6, duration: 80, useNativeDriver: true }),
      Animated.spring(s, { toValue: 1, useNativeDriver: true }),
    ]).start();
  };

  const renderItem = useCallback(({ item }: { item: Track }) => {
    const active = currentTrack?.id === item.id;
    return (
      <TouchableOpacity
        style={[st.row, active ? st.rowOn : st.rowOff]}
        onPress={() => { bounceHeart(item.id); onSelectTrack(item); }}
        activeOpacity={0.75}
      >
        {/* Curseur coeur */}
        <View style={st.cursor}>
          {active && (
            <Animated.Image
              source={A.heart}
              style={[st.heart, { transform: [{ scale: getHeartScale(item.id) }] }]}
              resizeMode="contain"
            />
          )}
        </View>

        {/* Titre */}
        <Text
          style={[st.title, active ? st.titleOn : st.titleOff]}
          numberOfLines={1}
        >
          {item.title}
        </Text>

        {/* EQ si en lecture */}
        {active && isPlaying && (
          <View style={st.eq}>
            {[0, 1, 2, 3, 4].map(i => <EqBar key={i} delay={i} />)}
          </View>
        )}
      </TouchableOpacity>
    );
  }, [currentTrack, isPlaying]);

  return (
    <View style={st.root}>

      {/* Fond anime Deltarune */}
      <Image source={A.bg} style={st.bgImg} resizeMode="cover" />
      {/* Couche assombrissante pour lisibilite */}
      <View style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(0,0,0,0.45)' }]} />

      {/* Corps : Ralsei + Battlebox */}
      <View style={st.body}>

        {/* Ralsei flottant a gauche (discret) */}
        <Animated.View style={[st.ralseiWrap, { transform: [{ translateY: ralseiY }] }]}>
          <Image
            source={isPlaying && currentTrack ? A.victory : A.ralsei}
            style={st.ralsei}
            resizeMode="contain"
          />
        </Animated.View>

        {/* Battlebox */}
        <View style={st.boxWrap}>

          {/* Barre de recherche dans la box */}
          <View style={st.searchRow}>
            <Text style={st.searchIcon}>♪</Text>
            <TextInput
              style={st.searchInput}
              value={query}
              onChangeText={setQuery}
              placeholder="Rechercher..."
              placeholderTextColor="rgba(0,229,0,0.4)"
              selectionColor={C.BOX}
            />
            {query.length > 0 && (
              <TouchableOpacity onPress={() => setQuery('')} style={st.clearBtn}>
                <Text style={st.clearTxt}>✕</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Separateur */}
          <View style={st.boxSep} />

          {/* Liste */}
          <Animated.View style={[st.box, { borderColor }]}>
            {/* Coins pixel noirs */}
            {([[-3,-3,'tl'],[undefined,-3,'tr'],[-3,undefined,'bl'],[undefined,undefined,'br']] as any[]).map(([t,l,k]) => (
              <View key={k} style={[st.corner, t !== undefined && { top: t }, l !== undefined && { left: l }, t === undefined && { bottom: -3 }, l === undefined && { right: -3 }]} />
            ))}

            {filtered.length === 0 ? (
              <View style={st.empty}>
                <Image source={A.heart} style={{ width: 24, height: 24, opacity: 0.4 }} resizeMode="contain" />
                <Text style={st.emptyTxt}>Aucun résultat</Text>
              </View>
            ) : (
              <FlatList
                data={filtered}
                keyExtractor={t => t.id}
                renderItem={renderItem}
                contentContainerStyle={st.listPad}
                showsVerticalScrollIndicator={false}
                initialNumToRender={18}
                keyboardShouldPersistTaps="handled"
              />
            )}
          </Animated.View>
        </View>
      </View>

      {/* Zone message bas style Deltarune */}
      <View style={st.msgBox}>
        <Text style={st.msgText} numberOfLines={2}>{msg}</Text>
        <Text style={st.count}>{tracks.length} PISTE{tracks.length !== 1 ? 'S' : ''}</Text>
      </View>

    </View>
  );
};

// ── Styles ────────────────────────────────────────────────────────────────────
const BOX_W  = SW - 100;
const HEART_SIZE = 13;

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.BG },

  // Fond
  bgImg: { ...StyleSheet.absoluteFillObject as any, width: '100%', height: '100%' },

  // Layout principal
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingTop: 8,
    gap: 8,
  },

  // Ralsei
  ralseiWrap: {
    width: 62,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 6,
  },
  ralsei: { width: 58, height: 78 },

  // Zone battlebox (recherche + liste)
  boxWrap: { flex: 1, alignSelf: 'stretch', paddingBottom: 6 },

  // Barre de recherche
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: C.BOX_DIM,
    backgroundColor: 'rgba(0,0,0,0.85)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 4,
    gap: 6,
  },
  searchIcon: { fontFamily: 'PressStart2P-Regular', fontSize: 8, color: C.BOX },
  searchInput: {
    flex: 1,
    fontFamily: 'PressStart2P-Regular',
    fontSize: 7,
    color: C.BOX,
    paddingVertical: 4,
    height: 28,
  },
  clearBtn: { padding: 4 },
  clearTxt: { fontFamily: 'PressStart2P-Regular', fontSize: 7, color: C.BOX },

  boxSep: { height: 0 },

  // Battlebox
  box: {
    flex: 1,
    borderWidth: 4,
    borderColor: C.BOX,
    backgroundColor: 'rgba(0,0,0,0.88)',
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    width: 8, height: 8,
    backgroundColor: C.BG,
    zIndex: 5,
  },
  listPad: { paddingVertical: 2 },

  // Ligne piste
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,229,0,0.08)',
    gap: 7,
  },
  rowOn:  { backgroundColor: C.ROW_ON },
  rowOff: { backgroundColor: C.ROW_OFF },

  // Coeur
  cursor: { width: HEART_SIZE + 2, alignItems: 'center' },
  heart:  { width: HEART_SIZE, height: HEART_SIZE },

  // Titre
  title: {
    flex: 1,
    fontFamily: 'PressStart2P-Regular',
    fontSize: 7,
    lineHeight: 13,
  },
  titleOn:  { color: C.ACTIVE },
  titleOff: { color: C.GRAY },

  // EQ
  eq: { flexDirection: 'row', alignItems: 'flex-end', gap: 2, height: 16 },
  eqBar: { width: 3, backgroundColor: C.BOX, borderRadius: 1 },

  // Etat vide
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10, padding: 20 },
  emptyTxt: { fontFamily: 'PressStart2P-Regular', fontSize: 8, color: C.GRAY, textAlign: 'center' },

  // Message bas
  msgBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: C.MSG_BG,
    borderTopWidth: 3,
    borderTopColor: C.BOX_DIM,
    gap: 8,
  },
  msgText: {
    flex: 1,
    fontFamily: 'PressStart2P-Regular',
    fontSize: 7,
    color: C.WHITE,
    lineHeight: 14,
  },
  count: {
    fontFamily: 'PressStart2P-Regular',
    fontSize: 5,
    color: 'rgba(0,229,0,0.6)',
    textAlign: 'right',
  },
});

export default BattleAlbumList;
